/**
 * Our service worker. Its important to note that its sitting at the top most level.
 */

console.log("SW startup");

self.addEventListener('install', function(event) {
	console.log("SW installed");
});

self.addEventListener('activate', function(event) {
	console.log("SW activated");
});

// Hijack the response
self.addEventListener('fetch', function(event) {
	event.respondWith(new Response("Hello world11!"));
});