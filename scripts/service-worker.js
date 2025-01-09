// Name of the Cache.
const CACHE = "cacheV1";

// Select files for caching.
let urlsToCache = [
    "/index.html",
    "/exam.html",
    "/settings.html",
    "/images",
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
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activated.");
});