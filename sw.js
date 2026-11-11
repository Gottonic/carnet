/* Le carnet a déménagé dans ORGA (Forge). Ce service worker remplace l'ancien :
   il efface les anciennes copies de l'app sur l'appareil, puis se retire.
   Il ne touche ni aux caches d'ORGA ni aux images d'exercices (carnet-media), réutilisées par Forge. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('carnet-') && k !== 'carnet-media').map(k => caches.delete(k))))
    .then(() => self.registration.unregister()));
});
