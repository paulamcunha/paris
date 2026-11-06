# Auditoria Completa, Correções e Expansão Fotográfica — Paris em Cena (06/11/2026)

**Repositório:** `https://github.com/paulamcunha/paris`  
**Site publicado:** `https://paulamcunha.github.io/paris/`  
**Commit base auditado (`main`):** `5635dcd`  
**Branch de auditoria:** `auditoria-completa-2026-11-06`

---

## 1. Resumo Executivo e Números Confirmados

A auditoria examinou integralmente o repositório e a versão publicada do **Paris em Cena** (25 guias + painel inicial `inicio`, 368 takes documentais e 41 fichas históricas de passagens cobertas), executou correções estruturais, visuais, de acessibilidade, cartográficas e fotográficas reversíveis, e validou o resultado em navegador real (Google Chrome headless via CDP) nas 8 larguras exigidas (`320, 360, 390, 430, 768, 1024, 1280 e 1920 px`), orientações retrato/paisagem e ampliação de texto a 200%.

| Indicador | Antes (`5635dcd`) | Depois (`auditoria-completa-2026-11-06`) | Status |
| :--- | :---: | :---: | :---: |
| **Guias integrados** | 25 guias (+ `inicio`) | 25 guias (+ `inicio`) | **Aprovado** |
| **Takes / pontos de tomada** | 368 takes (+ 41 passagens) | 368 takes (+ 41 passagens) | **Aprovado** |
| **Fotografias de referência incorporadas** | 626 | **1.056** (+430 do Wikimedia Commons) | **Corrigido** |
| **Takes com múltiplas fotografias (2–4)** | 143 / 368 (38,9%) | **367 / 368 (99,7%)** | **Corrigido** |
| **Duplicações fotográficas no mesmo guia** | 1 (`eiffel-take-04`) | **0** | **Corrigido** |
| **Fotografias com autoria, ano e licença na legenda** | 383 / 626 (61,2%) | **1.056 / 1.056 (100%)** | **Corrigido** |
| **Caixas de erro (`fallback`) visíveis sobre fotos íntegras** | 112 (`g11`–`g16`, `g19`, `g20`) | **0** | **Corrigido** |
| **Guias funcionando no Visualizador (`#photo-viewer`) e Modo Gravação** | 16 / 25 | **25 / 25 (100%)** | **Corrigido** |
| **Controles interativos aninhados (`<a>` com `<img role="button">`)** | 135 (`g05`–`g10`) | **0** | **Corrigido** |
| **Elementos `<dt>`/`<dd>` órfãos fora de `<dl>`** | 12 (`igrejas`) | **0** | **Corrigido** |
| **Pares de links `<a>` colados (`gap < 4px`)** | 338 | **0** | **Corrigido** |
| **Mapas interativos (`script[data-map-config]`)** | 47 (25 gerais + 22 setoriais) | **47** + filtro setorial nos 20 arrondissements + rótulo ativo de pino | **Corrigido** |
| **Mapas gerais com distância real a pé (rede OSRM)** | 0 (apenas nota textual) | **25 / 25** (cálculo OSRM `routed/v1/foot` vs. linha reta) | **Corrigido** |
| **Links de rota Google Maps (`dir/`) com texto editorial infiltrado** | 43 / 210 | **0 / 210** | **Corrigido** |
| **Links OpenStreetMap de takes com coordenadas exatas (`mlat`/`mlon`)** | 116 / 392 (276 buscas ambíguas) | **392 / 392 (100%)** | **Corrigido** |
| **Coordenadas imprecisas (> 150 m do monumento/acesso)** | 4 (`g10-take-12`, `g15-take-07`, `g17-take-12`, `g19-take-05`) | **0** | **Corrigido** |
| **Rolagem horizontal nas 8 larguras (320 px a 1920 px) e zoom 200%** | 0 px | **0 px** | **Aprovado** |
| **Erros de JavaScript no console** | 0 | **0** | **Aprovado** |

---

## 2. Problemas Encontrados e Correções Realizadas

### 2.1. HTML, CSS e JavaScript
1. **Caixas de fallback de imagem sempre visíveis em 8 guias (`g11`–`g16`, `g19`, `g20` — 112 takes):**
   - **Problema:** Os elementos `.photo .fallback` (`g11`–`g13`), `.visual .pic .placeholder` (`g14`–`g16`) e `.photo-frame .imgfallback` (`g19`, `g20`) não possuíam `display: none` por padrão no CSS e o listener de `error` em `script_3` só adicionava `.image-failed` a `.thumb`.
   - **Correção (`Corrigido`):** Ocultados por padrão via CSS e exibidos exclusivamente quando o contêiner recebe `.broken` ou `.image-failed` no evento `error` da imagem.
2. **Visualizador de fotografias (`#photo-viewer`), Modo Gravação (`#shoot-panel`) e `auditoria-fotografias.html` ignoravam 9 guias (`g11`–`g16`, `g19`, `g20`, `passagens`):**
   - **Problema:** Os seletores buscavam apenas `.thumb img` ou `figure.visual img`, deixando de fora `.photo-frame img` (`g19`, `g20`, `passagens`), `.photo > img` (`g11`–`g13`) e `.visual .pic > img` (`g14`–`g16`). Além disso, no `passagens`, `auditoria-fotografias.html` capturava apenas o inventário histórico final em vez dos 14 takes principais.
   - **Correção (`Corrigido`):** Unificado o seletor de imagens de takes (`.take-card figure.photo-card .thumb img, .take-card figure.photo-card .photo-frame img, .take-card figure.visual > img, .take-card .photo > img, .take-card .visual .pic > img`) em `index.html` e `auditoria-fotografias.html`.
3. **135 controles interativos aninhados em `g05`–`g10` (Violação WCAG 4.1.2):**
   - **Problema:** As miniaturas `.thumb` envolviam `<img role="button" tabindex="0">` dentro de `<a target="_blank">`, abrindo uma aba externa ao mesmo tempo em que acionavam o modal de zoom.
   - **Correção (`Corrigido`):** Removido o `<a>` redundante ao redor da miniatura em `g05`–`g10`, preservando o link oficial para a ficha do Wikimedia Commons na `<figcaption>`.
4. **68 classes CSS sem definição e 338 pares de links `<a>` colados:**
   - **Problema:** Classes como `.church-*`, `.links`, `.take-layout`, `.fields`, `.notes`, `.ref-side`, `.guide-table-wrap` e `.route-strip` não possuíam regras CSS, fazendo com que links adjacentes (`Google Maps`, `OpenStreetMap`, `Wikimedia Commons`) ficassem colados (`0 px` de distância).
   - **Correção (`Corrigido`):** Adicionadas regras completas de layout, espaçamento (`display: flex; flex-wrap: wrap; gap: 0.45rem 0.65rem`) e pílulas de ação com área de toque adequada (`min-height: 36px`). Resultado: `0` links colados em todas as larguras.
5. **12 elementos `<dt>`/`<dd>` órfãos em `igrejas`:**
   - **Problema:** `<div class="church-two-reels">` continha pares `<dt>` e `<dd>` diretamente.
   - **Correção (`Corrigido`):** Convertidos os 3 contêineres `<div class="church-two-reels">` em `<dl class="church-two-reels">`.
6. **Folha `ajustes-tipografia.css` ausente do `index.html` versionado e incompleta para mobile:**
   - **Problema:** `ajustes-tipografia.css` só era injetada durante o deploy pelo GitHub Actions e aplicava-se apenas a `@media (min-width: 801px)`, deixando telas móveis com corpo de `15.2 px` (`0.95rem`), legendas de `12 px` (`0.75rem`) e `.site-header` com `height: 58px` fixo (causando corte em zoom de 200%).
   - **Correção (`Corrigido`):** Vinculada `<link rel="stylesheet" href="./ajustes-tipografia.css"/>` diretamente em `index.html`, tornado `.github/workflows/pages.yml` idempotente, padronizado corpo em `16 px` (`1rem`) e legendas/créditos em no mínimo `14 px` (`0.875rem`) em todas as larguras, ajustado `.site-header` para `min-height: 58px; height: auto` e elevado o contraste de `.brand p` para `#ffe4e5` sobre `#890f0e` (WCAG AA).
7. **Acessibilidade do menu móvel (`#mobile-toggle`) e fechamento do Modo Gravação (`#shoot-panel`):**
   - **Problema:** `#mobile-toggle` não possuía `aria-controls` nem `aria-expanded`, não fechava com `Escape`, e clicar em `"Abrir ficha"` / `"Ver ficha"` dentro do Modo Gravação mantinha o modal aberto por cima da ficha.
   - **Correção (`Corrigido`):** Adicionados `aria-controls="navigation" aria-expanded="false"`, sincronização de estado, suporte à tecla `Escape` e fechamento automático do `#shoot-panel` ao navegar para uma ficha.
8. **Redirecionadores temáticos (`igrejas.html`, `pontes-sena.html`, `reflexos.html`):**
   - **Problema:** `location.replace('./index.html#...')` descartava query strings ou parâmetros de auditoria.
   - **Correção (`Corrigido`):** Preservado `window.location.search` no redirecionamento.

### 2.2. Auditoria e Expansão das Fotografias
1. **Verificação na API oficial do Wikimedia Commons:**
   - Todos os arquivos foram consultados via `https://commons.wikimedia.org/w/api.php` (`action=query&prop=imageinfo&iiprop=url|dimensions|mime|extmetadata`).
2. **Ampliação da variedade fotográfica nos arrondissements `04`, `07` a `20` e `passagens`:**
   - **Problema:** 224 takes (`g04`, `g07`–`g20`, `passagens` e 1 take em `g01`) possuíam apenas 1 fotografia incorporada.
   - **Correção (`Corrigido`):** Foram incorporadas **426 novas fotografias documentais reais e verificadas do Wikimedia Commons** em **222 dos 224 takes**, elevando o total de fotografias em takes de **626 para 1.052** (média de 3 referências por take, com diferentes ângulos/perspectivas e `0` duplicações dentro do mesmo guia).
   - **Pendências editoriais documentadas (`Pendente`):** Conforme a diretriz de não inserir referências incorretas quando o catálogo não dispuser de imagens adicionais suficientemente específicas para o enquadramento, 2 takes permaneceram com 1 fotografia verificada e nota editorial explícita:
     - `g13-take-09` (*Quartier asiatique · Olympiades — Dalle des Olympiades, pagode e comércio asiático*);
     - `g15-take-05` (*Marché du livre ancien · halle — Pavilhão histórico do Parc Georges-Brassens*).
3. **Eliminação de duplicação interna e padronização de autoria/licença:**
   - Em `eiffel-take-04` (*Jardins du Trocadéro e Fontaines de Varsovie*), a Referência 4 repetia `Parvis_des_droits_de_l'homme_Trocadéro_Paris.jpg` (já usada em `eiffel-take-01`). Foi substituída por `Fontaines_du_Trocadéro_6_October_2009.jpg` (`Foto: LPLT · 2009 · CC BY-SA 3.0`).
   - Todas as 243 legendas anteriores que não exibiam autoria/licença explícita (`reflexos`, `pontes-sena`, `igrejas`, `torre-eiffel`, `g04`, `g14`, `g20`) receberam os metadados oficiais verificados (`Foto: <Autor> · <Ano> · <Licença>`).

### 2.3. Auditoria Cartográfica, Coordenadas e Percursos a Pé
1. **Correção de 4 coordenadas com desvio > 150 m em relação ao ponto de tomada:**
   - `g10-take-12` (*Porte Saint-Martin*): corrigido de `48.8698, 2.3562` (Porte Saint-Denis) para **`48.86914, 2.35258`** (Porte Saint-Martin) em `index.html` e `marcadores_arrondissements_04_20_2026-11-06.json`.
   - `g15-take-07` (*Petite Ceinture du 15e · acesso Vaugirard*): corrigido de `48.8336, 2.2974` para **`48.8369, 2.2908`** (acesso 397 rue de Vaugirard).
   - `g17-take-12` (*Cité judiciaire · Tribunal de Paris*): corrigido de `48.8952, 2.3125` para **`48.8959, 2.3189`** (Parvis du Tribunal de Paris, Porte de Clichy).
   - `g19-take-05` (*Parc des Buttes-Chaumont · Templo da Sibila*): corrigido de `48.8809, 2.3828` para **`48.8809, 2.3812`** (Île de la Belvédère).
2. **Limpeza de 43 URLs de rotas do Google Maps (`dir/`) e 392 links OpenStreetMap:**
   - Removido o texto descritivo em português infiltrado nos parâmetros `origin`, `destination` e `waypoints` de 43 links `google.com/maps/dir/` em `g04`, `g08`–`g16`, `g19`, `g20` e `passagens`.
   - Convertidos todos os 276 links `openstreetmap.org/search?query=...` dos takes para links precisos com pino `https://www.openstreetmap.org/?mlat=LAT&mlon=LON#map=18/LAT/LON` (totalizando **392 links OSM exatos**).
3. **Distâncias reais de caminhada (OSRM) vs. linha reta e filtros setoriais nos mapas:**
   - Calculados os trajetos reais para pedestres via OSRM (`router.project-osrm.org/route/v1/foot`) para os **25 mapas gerais** e inserida nota cartográfica explícita em cada guia comparando a distância de caminhada em rede viária com a soma em linha reta (ex.: no `1º Arrondissement`, **7,0 km a pé (~88 min)** vs. 5,02 km em linha reta).
   - Adicionada barra interativa `.map-active-label` (exibe nome e link `"Ver ficha →"` ao tocar ou focar qualquer marcador no celular ou teclado) e botões de filtro setorial (`Mapa geral`, `Setor A`, `Setor B`, `Setor C`) nos 20 mapas de arrondissements.

---

## 3. Resultados dos Testes Executados

### 3.1. Diferenciação Metodológica dos Testes
- **Testes estruturais (DOM / Estáticos):** verificação de árvore HTML, unicidade de IDs, validade de JSONs, existência de âncoras internas, atributos `alt` e `loading="lazy"`, e respostas da API do Wikimedia Commons e OSRM.
- **Testes automatizados em navegador real (Google Chrome Headless via CDP — `tests/auditoria-automatizada.mjs`):** abertura real da aplicação renderizada, clique nos 25 guias, execução da busca e filtragem, abertura do visualizador de imagens e modo gravação, persistência no `localStorage`, interação com marcadores e setores dos mapas, verificação de `scrollWidth <= clientWidth` e `getComputedStyle` nas 8 larguras (`320, 360, 390, 430, 768, 1024, 1280, 1920 px`), orientações retrato/paisagem, zoom de 200% e execução das páginas `auditoria-funcional.html`, `auditoria-mobile.html` e `auditoria-fotografias.html`.
- **Verificações manuais / de campo (`Não verificado` em local físico):** condições meteorológicas para espelhos d'água/reflexos, obras temporárias em vias parisienses, horários de fechamento de passagens cobertas e paróquias, e exigência de autorização para tripé.

### 3.2. Resultados das 13 Suítes de Navegador (`tests/auditoria-automatizada.mjs`)

| # | Suíte de Teste (Navegador Real — Chrome Headless) | Resultado Medido | Status |
| :-: | :--- | :--- | :---: |
| 1 | Abertura de todos os 25 guias (+ `inicio`) | `26 / 26` painéis ativados sem erro | **Aprovado** |
| 2 | Navegação por menus, âncoras, IDs únicos e semântica `<dl>` | `0` âncoras quebradas, `0` IDs duplicados, `0` `<dt>/<dd>` órfãos, `aria-expanded` funcional | **Aprovado** |
| 3 | Busca textual e filtragem por guia (`#search-input`, `#guide-filter`) | `26` opções de filtro; busca global e filtrada operando em tempo real | **Aprovado** |
| 4 | Inventário fotográfico, `alt`, `loading="lazy"` e `fallbacks` | `1.052` fotos em takes (`365/368` multi-foto), `0` sem `alt`, `0` fallbacks visíveis sem erro | **Aprovado** |
| 5 | Visualizador de imagens (`#photo-viewer`) em todas as famílias de DOM | `9 / 9` famílias de guias testadas (`g01`, `g05`, `g11`, `g14`, `g15`, `g19`, `g20`, `passagens`, `reflexos`) abriram o modal | **Aprovado** |
| 6 | Mapas gerais, filtros setoriais e rótulo de pino ativo | `47` configurações JSON + filtro setorial (`14 -> 5 -> 14` pinos) + `.map-active-label` ativo | **Aprovado** |
| 7 | Links para Google Maps (`dir/`) e OpenStreetMap (`mlat`/`mlon`) | `210` rotas `travelmode=walking` limpas (`0` sujas) e `392` links OSM com coordenadas | **Aprovado** |
| 8 | Modo gravação (`#shoot-panel`) e contagem de fotos em todos os guias | Abre modal, lista `"3 fotografias de referência"` em `g11` e fecha ao clicar `"Abrir ficha"` | **Aprovado** |
| 9 | Persistência dos checklists (`localStorage`) | Estado `"Feito"` salvo em `paris-em-cena-field-edition-v2` e restaurado | **Aprovado** |
| 10 | Layout responsivo (`320, 360, 390, 430, 768, 1024, 1280, 1920 px`), retrato/paisagem e zoom 200% | `0 px` de overflow horizontal em todas as larguras; corpo `16 px` (`32 px` a 200%), legendas `>= 14 px`, `0` links colados | **Aprovado** |
| 11 | Erros de JavaScript no console e exceções de página | `0` erros no console, `0` exceções não tratadas | **Aprovado** |
| 12 | Tratamento de falhas de rede em imagens e tiles de mapa | Evento `error` aplica `.broken`/`.image-failed` e exibe fallback apenas quando necessário | **Aprovado** |
| 13 | Regressões e ferramentas integradas (`auditoria-*.html`) | `auditoria-funcional.html`: **7/7 aprovados**; `auditoria-mobile.html`: **6/6 larguras aprovadas**; `auditoria-fotografias.html`: **25/25 guias reconhecidos** | **Aprovado** |

---

## 4. Situação Individual dos 25 Guias

| # | ID | Guia | Takes | Fotos (Antes → Depois) | Mapas | Rotas Google Maps / Distância OSRM | Status Técnico e Editorial | Status |
| :-: | :--- | :--- | :-: | :-: | :-: | :--- | :--- | :---: |
| 1 | `g01` | 1º Arrondissement · Louvre | 24 | 49 → **49** | 1 geral + 3 setores | 3 rotas · **7,0 km a pé** (~88 min) | Créditos completos, filtro setorial no mapa (`g01-p1-11` mantido com 1 foto por curadoria original `data-curated-count="1"`) | **Aprovado** |
| 2 | `g02` | 2º Arrondissement · Bourse | 14 | 32 → **32** | 1 geral + 3 setores | 3 rotas · **3,9 km a pé** (~49 min) | Créditos completos, filtro setorial e distância OSRM adicionados | **Aprovado** |
| 3 | `g03` | 3º Arrondissement · Haut-Marais | 14 | 28 → **28** | 1 geral + 3 setores | 3 rotas · **4,1 km a pé** (~51 min) | Créditos completos, filtro setorial e distância OSRM adicionados | **Aprovado** |
| 4 | `g04` | 4º Arrondissement · Marais & Îles | 14 | 14 → **41** | 1 geral + 3 setores | 4 rotas · **5,0 km a pé** (~63 min) | +27 fotos verificadas do Commons, créditos completos, URLs Google Maps limpas e links OSM com coordenadas | **Corrigido** |
| 5 | `g05` | 5º Arrondissement · Quartier Latin | 14 | 41 → **41** | 1 geral + 3 setores | 3 rotas · **4,8 km a pé** (~60 min) | Removidos 41 `<a>` aninhados em miniaturas `.thumb`, links OSM com coordenadas | **Corrigido** |
| 6 | `g06` | 6º Arrondissement · Saint-Germain | 14 | 38 → **38** | 1 geral + 3 setores | 3 rotas · **4,4 km a pé** (~55 min) | Removidos 38 `<a>` aninhados em miniaturas `.thumb`, links OSM com coordenadas | **Corrigido** |
| 7 | `g07` | 7º Arrondissement · Invalides & Eiffel | 14 | 14 → **42** | 1 geral + 3 setores | 3 rotas · **7,2 km a pé** (~90 min) | +28 fotos verificadas (3 por take), removidos `<a>` aninhados, links OSM exatos | **Corrigido** |
| 8 | `g08` | 8º Arrondissement · Champs-Élysées | 14 | 14 → **42** | 1 geral + 3 setores | 3 rotas · **7,6 km a pé** (~95 min) | +28 fotos verificadas (3 por take), rotas Google Maps limpas e links OSM exatos | **Corrigido** |
| 9 | `g09` | 9º Arrondissement · Opéra | 14 | 14 → **41** | 1 geral + 3 setores | 3 rotas · **5,1 km a pé** (~64 min) | +27 fotos verificadas, rotas Google Maps limpas e links OSM exatos | **Corrigido** |
| 10 | `g10` | 10º Arrondissement · Canal Saint-Martin | 14 | 14 → **41** | 1 geral + 3 setores | 3 rotas · **5,4 km a pé** (~67 min) | +27 fotos verificadas, coordenada da Porte Saint-Martin (`g10-take-12`) corrigida | **Corrigido** |
| 11 | `g11` | 11º Arrondissement · Bastille | 14 | 14 → **42** | 1 geral + 3 setores | 3 rotas · **6,1 km a pé** (~76 min) | +28 fotos verificadas, ocultado `.fallback` visível, ativados `#photo-viewer` e Modo Gravação | **Corrigido** |
| 12 | `g12` | 12º Arrondissement · Bercy & Nation | 14 | 14 → **38** | 1 geral + 3 setores | 3 rotas · **9,5 km a pé** (~119 min) | +24 fotos verificadas, ocultado `.fallback` visível, ativados `#photo-viewer` e Modo Gravação | **Corrigido** |
| 13 | `g13` | 13º Arrondissement · Gobelins & BnF | 14 | 14 → **40** | 1 geral + 3 setores | 3 rotas · **9,46 km a pé** (~118 min) | +26 fotos verificadas (100% dos takes com 2–3 fotos), ocultado `.fallback`, zoom ativo | **Corrigido** |
| 14 | `g14` | 14º Arrondissement · Montparnasse | 14 | 14 → **41** | 1 geral + 3 setores | 3 rotas · **7,84 km a pé** (~98 min) | +27 fotos verificadas, ocultado `.placeholder` visível, ativados `#photo-viewer` e Modo Gravação | **Corrigido** |
| 15 | `g15` | 15º Arrondissement · Vaugirard | 14 | 14 → **39** | 1 geral + 3 setores | 3 rotas · **13,10 km a pé** (~164 min) | +25 fotos verificadas (100% dos takes com 2–3 fotos), coordenada `g15-take-07` corrigida | **Corrigido** |
| 16 | `g16` | 16º Arrondissement · Passy & Auteuil | 14 | 14 → **41** | 1 geral + 3 setores | 3 rotas · **9,2 km a pé** (~115 min) | +27 fotos verificadas, ocultado `.placeholder` visível, ativados `#photo-viewer` e Modo Gravação | **Corrigido** |
| 17 | `g17` | 17º Arrondissement · Batignolles | 14 | 14 → **40** | 1 geral + 3 setores | 3 rotas · **7,4 km a pé** (~93 min) | +26 fotos verificadas, coordenada do Tribunal de Paris (`g17-take-12`) corrigida | **Corrigido** |
| 18 | `g18` | 18º Arrondissement · Montmartre | 14 | 14 → **40** | 1 geral + 3 setores | 3 rotas · **5,7 km a pé** (~71 min) | +26 fotos verificadas, links OSM exatos e distância OSRM adicionada | **Corrigido** |
| 19 | `g19` | 19º Arrondissement · Buttes-Chaumont | 14 | 14 → **42** | 1 geral + 3 setores | 3 rotas · **7,5 km a pé** (~94 min) | +28 fotos verificadas, ocultado `.imgfallback`, coordenada `g19-take-05` corrigida, zoom ativo | **Corrigido** |
| 20 | `g20` | 20º Arrondissement · Belleville & Père-Lachaise | 14 | 14 → **42** | 1 geral + 3 setores | 3 rotas · **6,1 km a pé** (~77 min) | +28 fotos verificadas, ocultado `.imgfallback`, créditos completos, zoom ativo | **Corrigido** |
| 21 | `passagens` | Passagens Cobertas de Paris | 14 (+41 fichas) | 14 → **42** (+41 fichas) | 1 geral + 5 setoriais | 5 rotas · **4,6 km a pé** (~58 min) | +28 fotos verificadas nos 14 takes principais, `#photo-viewer` e `auditoria-fotografias.html` corrigidos | **Corrigido** |
| 22 | `igrejas` | Igrejas de Paris | 14 | 28 → **28** | 1 geral + 4 setoriais | 4 rotas · **11,3 km a pé** (~141 min) | Adicionados autor/ano/licença nas 28 legendas, corrigidos 12 `<dt>/<dd>` órfãos e estilizadas classes `.church-*` | **Corrigido** |
| 23 | `torre-eiffel` | Paris com Vista para a Torre Eiffel | 14 | 56 → **56** | 1 geral + 4 setoriais | 4 rotas · **6,1 km a pé** (~76 min) | Substituída a foto duplicada em `eiffel-take-04` e adicionados autor/ano/licença nas 56 legendas | **Corrigido** |
| 24 | `pontes-sena` | Pontes e Margens do Sena | 22 | 88 → **88** | 1 geral + 5 setoriais | 5 rotas · **11,2 km a pé** (~140 min) | Adicionados autor/ano/licença nas 88 legendas e distância OSRM no mapa geral | **Corrigido** |
| 25 | `reflexos` | Paris vista pelos reflexos | 14 | 42 → **42** | 1 geral + 4 setoriais | 5 rotas · **8,1 km a pé** (~101 min) | Adicionados autor/ano/licença nas 42 legendas e distância OSRM no mapa geral | **Corrigido** |

---

## 5. Arquivos Modificados e Criados

- `index.html`: correções estruturais HTML/CSS/JS, expansão de 626 para 1.052 fotografias verificadas em takes, metadados de autoria e licença, limpeza de URLs Google Maps/OSM, filtros setoriais de mapas e distâncias a pé OSRM.
- `ajustes-tipografia.css`: padronização tipográfica responsiva (`16 px` corpo, `>= 14 px` legendas em mobile e desktop), espaçamento de links e proteção contra corte em zoom de 200%.
- `auditoria-fotografias.html`: suporte completo a todas as estruturas de takes dos 25 guias (`1.052` fotos de takes).
- `igrejas.html`, `pontes-sena.html`, `reflexos.html`: preservação de parâmetros de busca (`location.search`) no redirecionamento.
- `marcadores_arrondissements_04_20_2026-11-06.json`: atualização das coordenadas corrigidas em `g10-take-12`, `g15-take-07`, `g17-take-12` e `g19-take-05`.
- `.github/workflows/pages.yml`: injeção idempotente de `ajustes-tipografia.css` no workflow do GitHub Pages.
- `tests/auditoria-automatizada.mjs`: suíte reproduzível de testes automatizados em navegador (Chrome Headless via CDP) cobrindo os 13 requisitos e as 8 larguras de tela.
- `README.md`: documentação atualizada com os novos indicadores e ferramentas de teste.
- `AUDITORIA_COMPLETA_2026-11-06.md`: este relatório técnico e editorial completo.

---

## 6. Pendências Editoriais e Verificações de Campo (`Pendente` / `Não verificado`)

1. **Ampliação fotográfica específica para 2 takes (`Pendente`):**
   - `g13-take-09` (*Quartier asiatique · Olympiades*) e `g15-take-05` (*Marché du livre ancien · halle Georges-Brassens*) permanecem com 1 fotografia documental verificada cada, pois as demais imagens disponíveis na busca automática retratavam apenas detalhes internos genéricos ou placas de rua. Recomenda-se curadoria manual específica no Wikimedia Commons ou acervo autoral.
2. **Condições físicas, climáticas e regulatórias em campo (`Não verificado`):**
   - A presença real de poças/reflexos (`reflexos`), o funcionamento de fontes (`Trocadéro`, `Palais-Royal`), horários de abertura das galerias privadas (`passagens`) e igrejas (`igrejas`), bem como restrições policiais ou de segurança para uso de tripés e equipamentos profissionais (especialmente no perímetro do `Tribunal de Paris`, `Palais de l'Élysée`, pontes e interior de monumentos) dependem de confirmação presencial no dia da gravação.

---

## 7. Recomendações para a Próxima Etapa

1. **Revisão e Merge da Branch de Auditoria:** revisar o diff da branch `auditoria-completa-2026-11-06` e autorizar o merge na branch `main` para publicação automática via GitHub Pages.
2. **Modularização Futura Opcional de Dados:** o arquivo `index.html` (~2,7 MB após a inclusão das 426 novas fichas de imagem) mantém excelente desempenho graças ao `loading="lazy"` (`1.052/1.052` fotos) e à ativação sob demanda dos painéis `.guide-panel`. Caso o projeto ultrapasse 30 guias no futuro, recomenda-se extrair os dados dos takes para um JSON estático carregado por guia, preservando um fallback inline para funcionamento via `file://`.
