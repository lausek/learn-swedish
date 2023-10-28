import { manifest, version } from '@parcel/service-worker';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { getCacheKeyForURL } from 'workbox-precaching';

export function isNav(event) {
  return event.request.mode === 'navigate'
};

export const NETWORK_HANDLER = new NetworkFirst({
	cacheName: cacheNames.precache,
	networkTimeoutSeconds: 5,
	plugins: [
		new CacheableResponsePlugin({
			statuses: [200],
		}),
	],
});

async function install() {
  const cache = await caches.open(version);
  await cache.addAll(manifest);
  console.log(`Cached ${manifest.length} files.`);
}
addEventListener('install', e => e.waitUntil(install()));

async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(key => key !== version && caches.delete(key))
  );
}
addEventListener('activate', e => e.waitUntil(activate()));

registerRoute(({ event }) => isNav(event), NETWORK_HANDLER);

setCatchHandler(({ event }) => {
	if (isNav(event)) {
		return caches.match(
			getCacheKeyForURL('/200.html') || getCacheKeyForURL('/index.html')
		);
	}
	return Response.error();
});