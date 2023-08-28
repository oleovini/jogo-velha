let chacheName = "tic-tac-toe"
let filesToCache = ["/", "index.html", "/css/style.css", "/js/main.js"];

self.addEventListener("install", (e)=>{
    e.waitUnti(
        caches.open(chaceName).then(function(cache){
            return cache.addAll(filesToChache);
        })
    )
});

self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) => {
        return response || fetch(e.request);
    })
   );
});