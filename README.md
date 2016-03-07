# Trying out Service Workers

Just playing around with service workers, poking at what type of performance gains it can provide.

## Notes:

* In a Prod environment, will only work with HTTPS
* Directory order matters, the loaded service worker can not be given a scope that is too high
* Even though I turned off my server instance, there is an offline experience that is still working
* Debugging seems peculiar... despite the `fetch` eventListener getting triggered, `console.log` does nothing.
* Hard refreshing appears to clear the service-worker cache.

## Helpful Resources:

* [Service Workers Explained](https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md)
* [MDN Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)