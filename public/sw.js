var cacheData = 'cache-v1';
var urlsToCache = [
  
    "/static/css/main.ee35176f.chunk.css",
    "/static/js/main.7147c22d.chunk.js",
    "/static/js/main.7147c22d.chunk.js.map",
    "/static/js/runtime-main.c299a62f.js",
    "/static/js/runtime-main.c299a62f.js.map",
    "/static/js/2.68c515d9.chunk.js",
    "/static/js/2.68c515d9.chunk.js.map",
    "/static/js/3.e8c06914.chunk.js",
    "/static/js/3.e8c06914.chunk.js.map",
    "/index.html"

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
