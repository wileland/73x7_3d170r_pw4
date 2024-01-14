const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute(
  // Define a filter function that will only match requests for assets like CSS, JS, and images
  ({ request }) => ['style', 'script', 'image'].includes(request.destination),
  // Use a CacheFirst strategy for these requests
  new CacheFirst({
    // Name of the cache
    cacheName: 'asset-cache',
    plugins: [
      // This plugin will cache responses with these headers to a maximum of 200 entries
      new CacheableResponsePlugin({
        statuses: [0, 200], // Cache only successful and opaque responses
      }),
      // This plugin will keep entries in the cache for 30 days before it gets purged
      new ExpirationPlugin({
        maxEntries: 200, // Limit the number of entries in the cache
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
        purgeOnQuotaError: true, // Safe fallback
      }),
    ],
  })
);

