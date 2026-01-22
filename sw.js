self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hustle').then(cache => {
      return cache.addAll(['index.html','style.css','game.js']);
    })
  );
});
