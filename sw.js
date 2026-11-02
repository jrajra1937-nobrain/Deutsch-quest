const CACHE='deutsch-quest-shell-v5-1';
const SHELL='./__dq_v5_shell__';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./dq-upgrade-v5.css','./dq-upgrade-v5.js','./dq-germany-week-v5-1.js'];

function injectUpgrade(html){
  if(!html.includes('dq-upgrade-v5.css')) html=html.replace('</head>','<link rel="stylesheet" href="./dq-upgrade-v5.css?v=5"></head>');
  if(!html.includes('dq-upgrade-v5.js')) html=html.replace('</body>','<script src="./dq-upgrade-v5.js?v=5"></script></body>');
  if(!html.includes('dq-germany-week-v5-1.js')) html=html.replace('</body>','<script src="./dq-germany-week-v5-1.js?v=5.1"></script></body>');
  return html;
}
async function upgradedResponse(resp){
  const html=injectUpgrade(await resp.text());
  const headers=new Headers(resp.headers);headers.set('content-type','text/html; charset=utf-8');headers.delete('content-length');
  return new Response(html,{status:resp.status,statusText:resp.statusText,headers});
}
async function refreshShell(){
  const cache=await caches.open(CACHE);
  const resp=await fetch('./index.html',{cache:'no-store'});
  if(resp.ok){const upgraded=await upgradedResponse(resp);await cache.put(SHELL,upgraded.clone());return upgraded}
  throw new Error('index fetch failed');
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);await cache.addAll(ASSETS.filter(x=>x!=='./'&&x!=='./index.html'));
  try{await refreshShell()}catch(e){}
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const req=event.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    event.respondWith((async()=>{try{return await refreshShell()}catch(e){return (await caches.open(CACHE)).match(SHELL)}})());return;
  }
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);const cached=await cache.match(req);
    try{const fresh=await fetch(req,{cache:'no-store'});if(fresh&&fresh.ok)cache.put(req,fresh.clone());return cached||fresh}catch(e){return cached}
  })());
});
