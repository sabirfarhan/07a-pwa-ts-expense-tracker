var cacheData = 'cache-v1';
var urlsToCache = [

  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/index.html'

];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheData)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  if (navigator.onLine) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
        )
    )
  }

})
