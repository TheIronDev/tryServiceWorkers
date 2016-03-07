/**
 * Expected Response:
 *
 * Boo! DOMException: Failed to register a ServiceWorker: The path of the provided scope ('/') is not under the max
 * scope allowed ('/javascripts/serviceWorkers/'). Adjust the scope, move the Service Worker script, or use the
 * Service-Worker-Allowed HTTP header to allow the scope.
 */


if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/javascripts/serviceWorkers/outOfScope.js', {
		scope: '/'
	}).then(function(reg) {
		console.log('Yey!', reg);
	}).catch(function(err) {
		console.log('Boo!', err);
	});
}