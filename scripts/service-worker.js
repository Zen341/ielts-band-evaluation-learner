// Name of the Cache.
const CACHE = "cacheV1";

// Select files for caching.
let urlsToCache = [
    "/index.html",
    "/exam.html",
    "/settings.html",
    "/images/icon-48x48.png", 
    "/scripts/common.js", 
    "/scripts/data.js", 
    "/scripts/theme.js", 
    "/scripts/pwa-handler.js",
    "/bootstrap-5.3.3-dist/css/bootstrap.min.css",
    "/bootstrap-5.3.3-dist/js/bootstrap.min.js"
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    console.log("Service worker installed")
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        }).catch((err) => {
            console.error("Error during caching:", err);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resource from server.
self.addEventListener("fetch", (event) => {
    // Cache-First Strategy
    console.log("fetch event")
    event.respondWith(
      caches
        .match(event.request) // check if the request has already been cached
        .then((cached) => cached || fetch(event.request)) // otherwise request network
        .then(
            (response) =>
              cache(event.request, response) // put response in cache
                .then(() => response) // resolve promise with the network response
          )
    );
  });

self.addEventListener("activate", (event) => {
    console.log("Service Worker activated.");
});