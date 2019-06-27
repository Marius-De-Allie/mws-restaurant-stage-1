const cacheFiles = ['/', '/index.html', '/restaurant.html', '/css/styles.css',
'/js/dbhelper.js', '/js/main.js', '/js/restaurant_info.js',
'/data/restaurants.json', '/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'
, '/img/5.jpg', '/img/6.jpg', '/img/7.jpg', '/img/8.jpg', '/img/9.jpg',
'/img/10.jpg'
];
console.log('serviceWorker registered!');
// Event listener that listens for install event completion on the service worker.
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('cache1').then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
      caches.match(e.request).then(function(response) {
        // check if request url already present in 'cache1'
        if(response) { //if response yes (match was found)
          return response; // then return request from 'cache1'.
        }
        else { //if resource requested not yet in cache1 then fetch resource.
          return fetch(e.request).then(function(response) {
            const responseClone = response.clone();
            caches.open('cache1').then(function(cache) {
              cache.put(e.request, responseClone);
            })
            return response;
          })
          .catch(function(err) {
            console.error(err);
          });
        }
      })
  );
});
