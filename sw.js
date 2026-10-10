// Franzis Schulapp – Service Worker
// App-Dateien werden beim Installieren gespeichert, damit die App offline startet.
// Bei jeder Änderung an index.html o. Ä. VERSION erhöhen – dann holt sich die App das Update.
const VERSION = 'v12';
const APP_CACHE = 'notenrechner-app-' + VERSION;
const RUNTIME_CACHE = 'notenrechner-runtime';

const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/favicon-64.png'
];

// Fremde Quellen, die zusätzlich zwischengespeichert werden (Schrift, Texterkennung)
const RUNTIME_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', (event) => {
  // cache: 'reload' – immer frisch vom Server holen, nicht aus dem HTTP-Cache des Browsers
  event.waitUntil(caches.open(APP_CACHE).then((c) => c.addAll(APP_FILES.map((u) => new Request(u, { cache: 'reload' })))));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k.startsWith('notenrechner-app-') && k !== APP_CACHE).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Die Seite schickt diese Nachricht, wenn der Nutzer „Aktualisieren“ tippt
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Eigene Dateien: zuerst aus dem Speicher (sofortiger Start, auch offline)
  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate') {
      event.respondWith(caches.match('./index.html').then((r) => r || fetch(req)));
      return;
    }
    event.respondWith(caches.match(req).then((r) => r || fetch(req)));
    return;
  }

  // Schrift & Texterkennung: aus dem Speicher, im Hintergrund auffrischen
  if (RUNTIME_HOSTS.includes(url.hostname)) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req).then((res) => {
          if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
  }
});
