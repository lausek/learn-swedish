(()=>{let e,t,s;function a(e,t,s,a){Object.defineProperty(e,t,{get:s,set:a,enumerable:!0,configurable:!0})}let r=[],i="";r=["/learn-swedish/index.html","/learn-swedish/manifest.webmanifest","/learn-swedish/android-chrome-192x192.626f50e2.png","/learn-swedish/android-chrome-512x512.d6bf5e41.png","/learn-swedish/favicon-32x32.e142a89f.png","/learn-swedish/favicon-16x16.8ee22d3e.png","/learn-swedish/apple-touch-icon.bcec069d.png","/learn-swedish/index.4ee8d03c.css","/learn-swedish/KFOlCnqEu92Fr1MmSU5fCRc4EsA.8895cd13.woff2","/learn-swedish/KFOlCnqEu92Fr1MmSU5fABc4EsA.303b9afa.woff2","/learn-swedish/KFOlCnqEu92Fr1MmSU5fCBc4EsA.73ef051e.woff2","/learn-swedish/KFOlCnqEu92Fr1MmSU5fBxc4EsA.962b7627.woff2","/learn-swedish/KFOlCnqEu92Fr1MmSU5fCxc4EsA.6fb53ea7.woff2","/learn-swedish/KFOlCnqEu92Fr1MmSU5fChc4EsA.51d7b0c4.woff2","/learn-swedish/KFOlCnqEu92Fr1MmSU5fBBc4.d07a8413.woff2","/learn-swedish/index.9aea524e.js","/learn-swedish/index.e1fa17d3.js"],i="a787ad97";var n={};a(n,"isNav",()=>T),a(n,"NETWORK_HANDLER",()=>O);// @ts-ignore
try{self["workbox:core:7.0.0"]&&_()}catch(e){}let l=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */class c extends Error{/**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */constructor(e,t){let s=l(e,t);super(s),this.name=e,this.details=t}}// @ts-ignore
try{self["workbox:routing:7.0.0"]&&_()}catch(e){}/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/let h=e=>e&&"object"==typeof e?e:{handle:e};/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */class o{/**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */constructor(e,t,s="GET"){// These values are referenced directly by Router so cannot be
// altered by minificaton.
this.handler=h(t),this.match=e,this.method=s}/**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */setCatchHandler(e){this.catchHandler=h(e)}}/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */class u extends o{/**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */constructor(e,t,s){super(({url:t})=>{let s=e.exec(t.href);// Return immediately if there's no match.
if(s&&(t.origin===location.origin||0===s.index))// If the route matches, but there aren't any capture groups defined, then
// this will return [], which is truthy and therefore sufficient to
// indicate a match.
// If there are capture groups, then it will return their values.
return s.slice(1)},t,s)}}/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/let d=e=>{let t=new URL(String(e),location.href);// See https://github.com/GoogleChrome/workbox/issues/2323
// We want to include everything, except for the origin if it's same-origin.
return t.href.replace(RegExp(`^${location.origin}`),"")};/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */class f{/**
     * Initializes a new Router.
     */constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}/**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */get routes(){return this._routes}/**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */addFetchListener(){// See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
self.addEventListener("fetch",e=>{let{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}/**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */addCacheListener(){// See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
self.addEventListener("message",e=>{// event.data is type 'any'
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
if(e.data&&"CACHE_URLS"===e.data.type){// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
let{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);let s=new Request(...t);return this.handleRequest({request:s,event:e});// TODO(philipwalton): TypeScript errors without this typecast for
// some reason (probably a bug). The real type here should work but
// doesn't: `Array<Promise<Response> | undefined>`.
}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}/**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */handleRequest({request:e,event:t}){let s;let a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;let r=a.origin===location.origin,{params:i,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:a}),l=n&&n.handler,c=e.method;if(!l&&this._defaultHandlerMap.has(c)&&(l=this._defaultHandlerMap.get(c)),!l)return;try{s=l.handle({url:a,request:e,event:t,params:i})}catch(e){s=Promise.reject(e)}// Get route's catch handler, if it exists
let h=n&&n.catchHandler;return s instanceof Promise&&(this._catchHandler||h)&&(s=s.catch(async s=>{// If there's a route catch handler, process that first
if(h)try{return await h.handle({url:a,request:e,event:t,params:i})}catch(e){e instanceof Error&&(s=e)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw s})),s}/**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){let r=this._routes.get(s.method)||[];for(let i of r){let r;// route.match returns type any, not possible to change right now.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
let n=i.match({url:e,sameOrigin:t,request:s,event:a});if(n)// Return early if have a match.
return Array.isArray(// See https://github.com/GoogleChrome/workbox/issues/2079
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
r=n)&&0===r.length?r=void 0:n.constructor===Object&&// eslint-disable-line
0===Object.keys(n).length?r=void 0:"boolean"==typeof n&&// don't set params.
// See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
(r=void 0),{route:i,params:r}}// If no match was found above, return and empty object.
return{}}/**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,h(e))}/**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */setCatchHandler(e){this._catchHandler=h(e)}/**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),// Give precedence to all of the earlier routes by adding this additional
// route to the end of the array.
this._routes.get(e.method).push(e)}/**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */unregisterRoute(e){if(!this._routes.has(e.method))throw new c("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new c("unregister-route-route-not-registered")}}let p=()=>(e||(// The helpers that use the default Router assume these listeners exist.
    (e=new f).addFetchListener(),e.addCacheListener()),e),g={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},w=e=>[g.prefix,e,g.suffix].filter(e=>e&&e.length>0).join("-"),y=e=>{for(let t of Object.keys(g))e(t)},m={updateDetails:e=>{y(t=>{"string"==typeof e[t]&&(g[t]=e[t])})},getGoogleAnalyticsName:e=>e||w(g.googleAnalytics),getPrecacheName:e=>e||w(g.precache),getPrefix:()=>g.prefix,getRuntimeName:e=>e||w(g.runtime),getSuffix:()=>g.suffix};/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */function R(e,t){let s=t();return e.waitUntil(s),s}// @ts-ignore
try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */class b{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{// TODO: `state` should never be undefined...
t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){// TODO: `state` should never be undefined...
let e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */class C{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{// Params is type any, can't change right now.
/* eslint-disable */let s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);/* eslint-enable */return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */async function v(e,s){let a=null;// If response.url isn't set, assume it's cross-origin and keep origin null.
if(e.url){let t=new URL(e.url);a=t.origin}if(a!==self.location.origin)throw new c("cross-origin-copy-response",{origin:a});let r=e.clone(),i={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},n=s?s(i):i,l=!/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */function(){if(void 0===t){let e=new Response("");if("body"in e)try{new Response(e.body),t=!0}catch(e){t=!1}t=!1}return t}()?await r.blob():r.body;return new Response(l,n)}/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/function q(e,t){let s=new URL(e);for(let e of t)s.searchParams.delete(e);return s.href}/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */async function E(e,t,s,a){let r=q(t.url,s);// If the request doesn't include any ignored params, match as normal.
if(t.url===r)return e.match(t,a);// Otherwise, match by comparing keys
let i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),n=await e.keys(t,i);for(let t of n){let i=q(t.url,s);if(r===i)return e.match(t,a)}}/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */class U{/**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
let H=new Set;/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */async function L(){for(let e of H)await e()}// @ts-ignore
try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}function K(e){return"string"==typeof e?new Request(e):e}/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */class F{/**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */constructor(e,t){for(let s of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new U,this._extendLifetimePromises=[],// Copy the plugins list (since it's mutable on the strategy),
// so any mutations don't affect this handler instance.
this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}/**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */async fetch(e){let{event:t}=this,s=K(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}// If there is a fetchDidFail plugin, we need to save a clone of the
// original request before it's either modified by a requestWillFetch
// plugin or before the original request's body is consumed via fetch().
let a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new c("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}// The request can be altered by plugins with `requestWillFetch` making
// the original request (most likely from a `fetch` event) different
// from the Request we make. Pass both to `fetchDidFail` to aid debugging.
let r=s.clone();try{let e;for(let a of(// See https://github.com/GoogleChrome/workbox/issues/1796
e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}/**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */async fetchAndCachePut(e){let t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}/**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */async cacheMatch(e){let t;let s=K(e),{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},r),{cacheName:a});for(let e of(t=await caches.match(i,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:r,cachedResponse:t,request:i,event:this.event})||void 0;return t}/**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */async cachePut(e,t){let s=K(e);// Run in the next task to avoid blocking other cache reads.
// https://github.com/w3c/ServiceWorker/issues/1397
await new Promise(e=>setTimeout(e,0));let a=await this.getCacheKey(s,"write");if(!t)throw new c("cache-put-with-no-response",{url:d(a.url)});let r=await this._ensureResponseSafeToCache(t);if(!r)return!1;let{cacheName:i,matchOptions:n}=this._strategy,l=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),o=h?await E(// feature. Consider into ways to only add this behavior if using
// precaching.
l,a.clone(),["__WB_REVISION__"],n):null;try{await l.put(a,h?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await L(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:o,newResponse:r.clone(),request:a,event:this.event});return!0}/**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */async getCacheKey(e,t){let s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=K(await e({mode:t,request:a,event:this.event,// params has a type any can't change right now.
params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}/**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}/**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */async runCallbacks(e,t){for(let s of this.iterateCallbacks(e))// this should work with `as WorkboxPluginCallbackParam[C]`.
await s(t)}/**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let s=this._pluginStateMap.get(t),a=a=>{let r=Object.assign(Object.assign({},a),{state:s});// TODO(philipwalton): not sure why `any` is needed. It seems like
// this should work with `as WorkboxPluginCallbackParam[C]`.
return t[e](r)};yield a}}/**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */waitUntil(e){return this._extendLifetimePromises.push(e),e}/**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}/**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */destroy(){this._handlerDeferred.resolve(null)}/**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */async _ensureResponseSafeToCache(e){let t=e,s=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return!s&&t&&200!==t.status&&(t=void 0),t}}/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */class k{/**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */constructor(e={}){/**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */this.cacheName=m.getRuntimeName(e.cacheName),/**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */this.plugins=e.plugins||[],/**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */this.fetchOptions=e.fetchOptions,/**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */this.matchOptions=e.matchOptions}/**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */handle(e){let[t]=this.handleAll(e);return t}/**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */handleAll(e){// Allow for flexible options to be passed.
e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,r=new F(this,{event:t,request:s,params:a}),i=this._getResponse(r,s,t),n=this._awaitComplete(i,r,s,t);// Return an array of promises, suitable for use with Promise.all().
return[i,n]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{// The "official" Strategy subclasses all throw this error automatically,
// but in case a third-party Strategy doesn't, ensure that we have a
// consistent failure when there's no response or an error response.
if(!(a=await this._handle(t,e))||"error"===a.type)throw new c("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(let i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:s,request:t}))break}if(!a)throw r}for(let r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let r,i;try{r=await e}catch(e){// Ignore errors, as response errors should be caught via the `response`
// promise above. The `done` promise will only throw for errors in
// promises passed to `handler.waitUntil()`.
}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:r,error:i}),t.destroy(),i)throw i}}/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 *//**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */class x extends k{/**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */constructor(e={}){e.cacheName=m.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,// Redirected responses cannot be used to satisfy a navigation request, so
// any redirected response must be "copied" rather than cloned, so the new
// response doesn't contain the `redirected` flag. See:
// https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
this.plugins.push(x.copyRedirectedCacheableResponsesPlugin)}/**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */async _handle(e,t){let s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;let a=t.params||{};// Fall back to the network if we're configured to do so.
if(this._fallbackToNetwork){let r=a.integrity,i=e.integrity;// Do not add integrity if the original request is no-cors
// See https://github.com/GoogleChrome/workbox/issues/3096
s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||r:void 0})),r&&(!i||i===r)&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else // https://github.com/GoogleChrome/workbox/issues/1441
throw new c("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let s=await t.fetch(e),a=await t.cachePut(e,s.clone());if(!a)// we want to do if *any* of the responses aren't safe to cache.
throw new c("bad-precaching-response",{url:e.url,status:s.status});return s}/**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[s,a]of this.plugins.entries())// Ignore the copy redirected plugin when determining what to do.
a!==x.copyRedirectedCacheableResponsesPlugin&&(a===x.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(x.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1);// Nothing needs to be done if cacheWillUpdatePluginCount is 1
}}x.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},x.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await v(e):e};/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */class A{/**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new x({cacheName:m.getPrecacheName(e),plugins:[...t,new C({precacheController:this})],fallbackToNetwork:s}),// Bind the install and activate methods to the instance.
this.install=this.install.bind(this),this.activate=this.activate.bind(this)}/**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */get strategy(){return this._strategy}/**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}/**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */addToCacheList(e){let t=[];for(let s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);let{cacheKey:e,url:a}=function(e){if(!e)throw new c("add-to-cache-list-unexpected-type",{entry:e});// If a precache manifest entry is a string, it's assumed to be a versioned
// URL, like '/app.abcd1234.js'. Return as-is.
if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:s}=e;if(!s)throw new c("add-to-cache-list-unexpected-type",{entry:e});// If there's just a URL and no revision, then it's also assumed to be a
// versioned URL.
if(!t){let e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}// Otherwise, construct a properly versioned URL using the custom Workbox
// search parameter along with the revision info.
let a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new c("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new c("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){let e=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;// Use console directly to display this warning without bloating
// bundle sizes by pulling in all of the logger codebase in prod.
console.warn(e)}}}/**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */install(e){// waitUntil returns Promise<any>
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
return R(e,async()=>{let t=new b;// Cache entries one at a time.
// See https://github.com/GoogleChrome/workbox/issues/2528
for(let[s,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),r=this._urlsToCacheModes.get(s),i=new Request(s,{integrity:t,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}let{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}/**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */activate(e){// waitUntil returns Promise<any>
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
return R(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let r of t)s.has(r.url)||(await e.delete(r),a.push(r.url));return{deletedURLs:a}})}/**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */getURLsToCacheKeys(){return this._urlsToCacheKeys}/**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}/**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}/**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}/**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */async matchPrecache(e){let t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){let e=await self.caches.open(this.strategy.cacheName);return e.match(s)}}/**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new c("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let N=()=>(s||(s=new A),s);/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */function S(e){let t=N();return t.getCacheKeyForURL(e)}/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 *//**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 *//**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 *//**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */function T(e){return"navigate"===e.request.mode}let O=new NetworkFirst({cacheName:cacheNames.precache,networkTimeoutSeconds:5,plugins:[new CacheableResponsePlugin({statuses:[200]})]});async function P(){let e=await caches.open(i);await e.addAll(r),console.log(`Cached ${r.length} files.`)}async function M(){let e=await caches.keys();await Promise.all(e.map(e=>e!==i&&caches.delete(e)))}addEventListener("install",e=>e.waitUntil(P())),addEventListener("activate",e=>e.waitUntil(M())),/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */function(e,t,s){let a;if("string"==typeof e){let r=new URL(e,location.href);// If `capture` is a string then `handler` and `method` must be present.
a=new o(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)a=new u(e,t,s);else if("function"==typeof e)a=new o(e,t,s);else if(e instanceof o)a=e;else throw new c("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});let r=p();r.registerRoute(a)}(({event:e})=>T(e),O),/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*//**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof workbox-routing
 */function(e){let t=p();t.setCatchHandler(e)}(({event:e})=>T(e)?caches.match(S("/200.html")||S("/index.html")):Response.error())})();//# sourceMappingURL=sw.js.map

//# sourceMappingURL=sw.js.map
