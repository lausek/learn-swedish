import { manifest, version } from '@parcel/service-worker';
import { setupRouting } from 'preact-cli/sw/';

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

setupRouting();