const CACHE='deutsch-quest-shell-v4';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

// Progress is NOT stored in this cache. It stays in localStorage on each device.
// This service worker only manages the shared app files.
self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;

  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;

  // For pages: try the latest GitHub Pages version first.
  // If offline, fall back to the installed copy.
  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req,{cache:'no-store'})
        .then(resp=>{
          if(resp && resp.ok){
            const copy=resp.clone();
            caches.open(CACHE).then(cache=>cache.put('./index.html',copy));
          }
          return resp;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }

  // Static files load instantly from cache, while a fresh copy is fetched in the background.
  event.respondWith(
    caches.match(req).then(cached=>{
      const fresh=fetch(req,{cache:'no-store'})
        .then(resp=>{
          if(resp && resp.ok){
            const copy=resp.clone();
            caches.open(CACHE).then(cache=>cache.put(req,copy));
          }
          return resp;
        })
        .catch(()=>cached);
      return cached || fresh;
    })
  );
});