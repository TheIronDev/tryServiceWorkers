/**
 * Skip Server Test: Whats interesting to note is that upon refreshing, we aren't even visiting the server response,
 * we are immediately invoking the `fetch` eventLister and overriding the server.  Super crazy.
 */

self.addEventListener('install', function(event) {});
self.addEventListener('activate', function(event) {});

// Hijack the response
self.addEventListener('fetch', function(event) {
	event.respondWith(new Response('Hello World'));
});