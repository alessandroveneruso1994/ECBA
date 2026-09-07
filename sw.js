/**
 * Service worker: l'app deve funzionare offline, anche in metropolitana.
 * Strategia cache-first sugli asset, che sono statici e versionati dal CACHE nome.
 * Alza la versione a ogni rilascio per invalidare la cache vecchia.
 */
var CACHE = 'ecba-trainer-v1';

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

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function (hit) {
      if (hit) return hit;
      return fetch(event.request)
        .then(function (res) {
          // Mette in cache solo le risposte valide dello stesso origine.
          if (res.ok && res.type === 'basic') {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(event.request, copy); });
          }
          return res;
        })
        .catch(function () {
          // Navigazione offline verso una pagina non in cache: serve l'app shell.
          if (event.request.mode === 'navigate') return caches.match('./index.html');
          throw new Error('offline');
        });
    })
  );
});
