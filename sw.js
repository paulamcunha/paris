/* Paris em Cena · Service Worker para funcionamento offline no metrô e em campo */
const CACHE_CORE = 'paris-em-cena-core-v2';
const CACHE_RUNTIME = 'paris-em-cena-runtime-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './ajustes-tipografia.css',
  './manifest.webmanifest',
  './icon-paris-em-cena.svg',
  './Paris_em_Cena_Completo_410_pontos.kml'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_CORE).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_CORE && k !== CACHE_RUNTIME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Stale-while-revalidate for same-origin HTML, CSS, KML, JSON
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => {
        const netFetch = fetch(req).then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_CORE).then(c => c.put(req, copy));
          }
          return res;
        }).catch(() => cached);
        return cached || netFetch;
      })
    );
    return;
  }

  // Cache-first with background fallback for OpenStreetMap tiles and Wikimedia Commons thumbnails visited on Wi-Fi
  if (url.hostname.includes('openstreetmap.org') || url.hostname.includes('wikimedia.org')) {
    event.respondWith(
      caches.open(CACHE_RUNTIME).then(cache =>
        cache.match(req).then(cached => {
          if (cached) return cached;
          return fetch(req).then(res => {
            if (res && (res.status === 200 || res.type === 'opaque')) {
              cache.put(req, res.clone());
            }
            return res;
          });
        })
      )
    );
  }
});
