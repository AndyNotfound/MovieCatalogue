self.addEventListener("install", (e) => {
  console.log("Installing service worker ...");
  //   TODO: Caching App Shell Resource
});

self.addEventListener("activate", (e) => {
  console.log("Activating service worker ...");
  // TODO: Deleting Old Caches
});

self.addEventListener("fetch", (e) => {
  console.log(e.request);
  e.respondWith(fetch(e.request));
  //   TODO: HTTP Request to/from Cache
});
