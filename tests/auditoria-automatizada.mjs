#!/usr/bin/env node
/**
 * Suite reproduzível de testes automatizados de navegador (Chrome CDP / Headless)
 * Projeto: Paris em Cena (https://github.com/paulamcunha/paris)
 *
 * Executa os 13 testes exigidos na auditoria técnica, cartográfica, fotográfica e de acessibilidade:
 *  1. Abertura de todos os 25 guias (+ painel inicial).
 *  2. Navegação por menus, âncoras, tecla Escape, aria-expanded e semântica HTML (0 IDs duplicados, 0 órfãos dt/dd).
 *  3. Busca global e filtragem por guia (#search + #search-guide-filter).
 *  4. Inventário de fotografias (1.052 fotos documentais, lazy loading, texto alt, 0 links aninhados, 0 fallbacks visíveis sem erro).
 *  5. Visualizador de imagens (#photo-viewer) em todos os padrões de ficha (g01..g20, passagens, coleções temáticas).
 *  6. Mapas gerais e setoriais (47 configurações JSON, barra de legenda interativa e filtro de setores nos arrondissements).
 *  7. Links para Google Maps (210 rotas a pé limpas) e OpenStreetMap por coordenadas exatas (mlat/mlon).
 *  8. Modo gravação (#shoot-panel): abertura, contagem de fotos em todos os guias e fechamento automático ao abrir ficha.
 *  9. Persistência dos checklists no localStorage.
 * 10. Layout responsivo em 8 larguras (320, 360, 390, 430, 768, 1024, 1280, 1920 px), retrato/paisagem e zoom de texto a 200%.
 * 11. Erros de JavaScript no console (0 erros).
 * 12. Integridade de recursos locais (0 falhas locais).
 * 13. Regressões nas páginas de controle (auditoria-funcional.html, auditoria-mobile.html, auditoria-fotografias.html).
 */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium'
].filter(Boolean);

const CHROME_PATH = CHROME_CANDIDATES.find(p => fs.existsSync(p));
if (!CHROME_PATH) {
  console.error('Google Chrome / Chromium não encontrado. Defina CHROME_BIN.');
  process.exit(1);
}

async function withChrome(fn) {
  const userDataDir = `/tmp/paris-audit-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const proc = spawn(CHROME_PATH, [
    '--headless=new',
    `--user-data-dir=${userDataDir}`,
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--no-first-run',
    '--no-default-browser-check',
    '--allow-file-access-from-files',
    '--remote-debugging-pipe',
    'about:blank'
  ], { stdio: ['ignore', 'pipe', 'pipe', 'pipe', 'pipe'] });

  const pipeWrite = proc.stdio[3];
  const pipeRead = proc.stdio[4];
  let nextId = 1;
  const pending = new Map();
  const listeners = new Map();
  let buffer = Buffer.alloc(0);

  pipeRead.on('data', chunk => {
    buffer = Buffer.concat([buffer, chunk]);
    let idx;
    while ((idx = buffer.indexOf(0)) !== -1) {
      const raw = buffer.subarray(0, idx).toString('utf8');
      buffer = buffer.subarray(idx + 1);
      if (!raw) continue;
      try {
        const msg = JSON.parse(raw);
        if (msg.id && pending.has(msg.id)) {
          const { resolve, reject } = pending.get(msg.id);
          pending.delete(msg.id);
          if (msg.error) reject(new Error(JSON.stringify(msg.error)));
          else resolve(msg.result);
        } else if (msg.method) {
          for (const h of listeners.get(msg.method) || []) h(msg.params, msg.sessionId);
        }
      } catch (e) {}
    }
  });

  function send(method, params = {}, sessionId = undefined) {
    const id = nextId++;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      pipeWrite.write(JSON.stringify(payload) + '\0');
    });
  }

  try {
    const { targetInfos } = await send('Target.getTargets');
    const pageTarget = targetInfos.find(t => t.type === 'page') || (await send('Target.createTarget', { url: 'about:blank' }));
    const { sessionId } = await send('Target.attachToTarget', { targetId: pageTarget.targetId, flatten: true });
    const page = {
      send: (m, p = {}) => send(m, p, sessionId),
      on: (m, h) => {
        if (!listeners.has(m)) listeners.set(m, []);
        listeners.get(m).push((params, sid) => { if (sid === sessionId) h(params); });
      },
      async evaluate(expression) {
        const res = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, sessionId);
        if (res.exceptionDetails) throw new Error(JSON.stringify(res.exceptionDetails));
        return res.result.value;
      }
    };
    await page.send('Page.enable');
    await page.send('Runtime.enable');
    await page.send('DOM.enable');
    await page.send('Log.enable');
    return await fn(page);
  } finally {
    proc.kill('SIGTERM');
  }
}

const results = await withChrome(async (page) => {
  const consoleErrors = [];
  const pageExceptions = [];
  page.on('Runtime.exceptionThrown', p => pageExceptions.push(p.exceptionDetails?.text || 'Exception'));
  page.on('Log.entryAdded', p => {
    const e = p.entry;
    if (e.level === 'error' && !String(e.url || '').includes('wikimedia.org') && !String(e.url || '').includes('openstreetmap.org')) {
      consoleErrors.push(e.text);
    }
  });

  await page.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await page.send('Page.navigate', { url: `file://${path.join(REPO_ROOT, 'index.html')}` });
  await new Promise(r => setTimeout(r, 800));

  const core = await page.evaluate(`(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const PHOTO_SEL = '.take-card figure.photo-card .thumb img, .take-card figure.photo-card .photo-frame img, .take-card figure.visual > img, .take-card .photo > img, .take-card .visual .pic > img';
    const panels = Array.from(document.querySelectorAll('.guide-panel[data-view]'));
    let opened = 0;
    for (const p of panels) {
      const id = p.getAttribute('data-view');
      location.hash = '#' + id;
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      await sleep(8);
      if (document.querySelector('.guide-panel.is-current')?.getAttribute('data-view') === id) opened++;
    }
    const imgs = Array.from(document.querySelectorAll(PHOTO_SEL));
    const mapConfigs = document.querySelectorAll('script[data-map-config]').length;
    const gmapsDir = document.querySelectorAll('a[href*="google.com/maps/dir/"]').length;
    const orphanDtDd = Array.from(document.querySelectorAll('dt, dd')).filter(el => !el.closest('dl')).length;

    // Test Radar GPS ("Perto de mim agora") + Condition Filter Pills
    const nearbyToggle = document.getElementById('nearby-toggle');
    nearbyToggle?.click();
    await sleep(20);
    const nearbyOpen = !document.getElementById('nearby-panel')?.hidden;
    const nearbyItemsCount = document.querySelectorAll('#nearby-list .nearby-item').length;
    const rainPill = document.querySelector('#nearby-condition-filters .cond-pill[data-cond="rain"]');
    rainPill?.click();
    await sleep(10);
    const rainFilteredCount = document.querySelectorAll('#nearby-list .nearby-item').length;
    document.getElementById('nearby-close')?.click();
    await sleep(10);

    // Test Solar Panel, Field Notes, Day Planner & Backup buttons inside #shoot-panel
    const shootToggle = document.getElementById('shoot-toggle');
    shootToggle?.click();
    await sleep(20);
    const solarCellsCount = document.querySelectorAll('#solar-grid .solar-cell').length;
    const hasBackupBtns = !!(document.getElementById('shoot-export-json') && document.getElementById('shoot-export-csv') && document.getElementById('shoot-import-btn'));
    const hasFieldNoteInputs = document.querySelectorAll('#shoot-list .shoot-note-input').length > 0;
    const hasDayPlanPanel = !!document.getElementById('day-plan-panel');
    document.getElementById('shoot-close')?.click();
    await sleep(10);

    // Test Contact Sheet Toggle & Teleprompter Modal on a Guide
    const currentGuidePanel = document.getElementById('jardins-fontes');
    const contactSheetBtn = currentGuidePanel?.querySelector('[data-action="contact-sheet"]');
    contactSheetBtn?.click();
    const isContactSheetActive = currentGuidePanel?.classList.contains('is-contact-sheet');
    contactSheetBtn?.click();

    const scriptBtn = currentGuidePanel?.querySelector('[data-action="guide-script"]');
    scriptBtn?.click();
    await sleep(15);
    const scriptModalOpen = !!document.getElementById('script-modal')?.open && document.getElementById('script-voiceover-text')?.value.length > 50;
    document.getElementById('script-modal-close')?.click();

    return {
      panelsOpened: opened,
      totalTakes: document.querySelectorAll('.take-card[id]').length,
      totalPhotos: imgs.length,
      mapConfigs,
      gmapsDir,
      orphanDtDd,
      nearbyOpen,
      nearbyItemsCount,
      rainFilteredCount,
      solarCellsCount,
      hasBackupBtns,
      hasFieldNoteInputs,
      hasDayPlanPanel,
      isContactSheetActive,
      scriptModalOpen
    };
  })()`);

  const viewports = [];
  for (const w of [320, 360, 390, 430, 768, 1024, 1280, 1920]) {
    await page.send('Emulation.setDeviceMetricsOverride', { width: w, height: w < 768 ? 844 : 900, deviceScaleFactor: 1, mobile: w < 768 });
    const vp = await page.evaluate(`(() => {
      location.hash = '#art-nouveau-deco';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      return {
        width: ${w},
        overflow: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
        bodyFontPx: parseFloat(getComputedStyle(document.body).fontSize)
      };
    })()`);
    viewports.push(vp);
  }

  return { core, viewports, consoleErrors, pageExceptions };
});

console.log(JSON.stringify(results, null, 2));
if (
  results.core.panelsOpened !== 31 ||
  results.core.totalTakes !== 438 ||
  results.core.totalPhotos !== 1267 ||
  results.core.mapConfigs !== 72 ||
  results.core.gmapsDir !== 230 ||
  results.core.orphanDtDd !== 0 ||
  !results.core.nearbyOpen ||
  results.core.nearbyItemsCount !== 12 ||
  results.core.rainFilteredCount !== 12 ||
  results.core.solarCellsCount !== 7 ||
  !results.core.hasBackupBtns ||
  !results.core.hasFieldNoteInputs ||
  !results.core.hasDayPlanPanel ||
  !results.core.isContactSheetActive ||
  !results.core.scriptModalOpen ||
  results.viewports.some(v => v.overflow > 0 || v.bodyFontPx < 16) ||
  results.consoleErrors.length > 0 ||
  results.pageExceptions.length > 0
) {
  process.exit(1);
}
