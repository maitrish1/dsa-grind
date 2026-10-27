const C="dsa-v13";
const ASSETS=["/","/index.html","/chart.umd.min.js","/manifest.webmanifest","/icon-192.png","/icon-512.png"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))
  ).then(()=>self.clients.claim());
});

self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.pathname.startsWith("/api/"))return;
  e.respondWith(
    fetch(e.request).then(r=>{
      const k=r.clone();
      caches.open(C).then(c=>c.put(e.request,k));
      return r;
    }).catch(()=>caches.match(e.request))
  );
});