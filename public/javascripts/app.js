
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/javascripts/serviceWorkers/test.js', {

	}).then(function(reg) {
		console.log('Yey!', reg);
	}).catch(function(err) {
		console.log('Boo!', err);
	});
}