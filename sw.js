/* service worker mínimo: só para o Chrome permitir instalar a casca como app (não guarda nada em cache) */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
