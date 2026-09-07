/**
 * Service worker: l'app deve funzionare offline, anche in metropolitana.
 *
 * Strategia stale-while-revalidate per i file dell'app: la pagina si serve
 * subito dalla cache — quindi parte offline e senza attesa — mentre in
 * background si scarica la versione aggiornata per l'apertura successiva.
 * Con una semplice cache-first chi ha già installato l'app resterebbe fermo
 * alla versione scaricata la prima volta e non vedrebbe mai le domande nuove.
 *
 * Le icone restano cache-first: non cambiano mai e non vale la pena
 * rifetcharle a ogni avvio.
 */
var CACHE = 'ecba-trainer-v2';

var ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/engine.js',
  './js/storage.js',
  './data/blueprint.js',
  './data/questions.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (k) {
          return k === CACHE ? null : caches.delete(k);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

function isIcon(url) {
  return url.indexOf('/icons/') !== -1;
}

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function (hit) {
      // Le icone non cambiano: se sono in cache, bastano.
      if (hit && isIcon(event.request.url)) return hit;

      var network = fetch(event.request)
        .then(function (res) {
          // Aggiorna la cache solo con risposte valide dello stesso origine.
          if (res.ok && res.type === 'basic') {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(event.request, copy); });
          }
          return res;
        })
        .catch(function () {
          if (hit) return hit;
          // Navigazione offline verso una pagina non in cache: serve l'app shell.
          if (event.request.mode === 'navigate') return caches.match('./index.html');
          throw new Error('offline');
        });

      // In cache: rispondi subito e aggiorna in background per la volta dopo.
      return hit || network;
    })
  );
});
