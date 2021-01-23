var cacheData = 'cache-v1';
var urlsToCache = [

  '/static/css/main.ee35176f.chunk.css',
  '/static/js/2.da6b752d.chunk.js',
  '/static/js/main.90cdcc86.chunk.js',
  'index.html'

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
