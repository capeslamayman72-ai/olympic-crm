/* Service Worker — يخلي البرنامج يفتح من غير نت ويبقى قابل للتثبيت كتطبيق أندرويد */
const CACHE = 'olympic-crm-v3';
const ASSETS = [
  './',
  './index.html',
  './institute-sales-crm-v2.html',
  './config.js',
  './logo.png',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(()=> self.skipWaiting())
  );
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(()=> self.clients.claim())
  );
});

/* شبكة الأول وبعدين الكاش — عشان أي تحديث للبرنامج يوصل فوراً */
self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== location.origin) return;   /* الخطوط الخارجية تعدي عادي */

  e.respondWith(
    fetch(req)
      .then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
        return res;
      })
      .catch(()=> caches.match(req).then(r => r || caches.match('./institute-sales-crm-v2.html')))
  );
});
