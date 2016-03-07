# Trying out Service Workers

Just playing around with service workers, poking at what type of performance gains it can provide.

## Tests:

The regular flow can be achieved by visiting `/`, which will replace the pichu image with a pikachu image upon refreshing.

If you visit `/delayed`, the first page load will take `5000ms`. After that, refreshing will respond in approximately 3ms,
the serviceWorker can override calling out to the server entirely.  This can be super convenient for caching things that
shouldn't be cached on the server... but the user will still suffer the initial page load.

Visiting `/outOfScope` will load the same serviceWorker as `/`... but the service worker will be found in a directory
that is out of the scope to intercept other requests.


## Dev Notes:

* In a Prod environment, will only work with HTTPS
* Directory order matters, the loaded service worker can not be given a scope that is too high
* Even though I turned off my server instance, there is an offline experience that is still working
* Debugging seems peculiar... despite the `fetch` eventListener getting triggered, `console.log` does nothing.
* Hard refreshing appears to clear the service-worker cache, iff there are no other tabs with that domain open.

## Helpful Resources:

* [Service Workers Explained](https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md)
* [MDN Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)