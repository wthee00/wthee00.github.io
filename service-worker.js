const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  '/.vscode/settings.json',
  '/css/bootstrap/bootstrap-grid.css',
  '/css/bootstrap/bootstrap-reboot.css',
  '/css/bootstrap/bootstrap.css',
  '/css/aos.css',
  '/css/bootstrap-datepicker.css',
  '/css/bootstrap.min.css',
  '/css/bootstrap.min.css.map',
  '/css/jquery-ui.css',
  '/css/jquery.fancybox.min.css',
  '/css/magnific-popup.css',
  '/css/mediaelementplayer.css',
  '/css/owl.carousel.min.css',
  '/css/owl.theme.default.min.css',
  '/css/style.css',
  '/fonts/flaticon/font/_flaticon.scss',
  '/fonts/flaticon/font/flaticon.css',
  '/fonts/flaticon/font/Flaticon.eot',
  '/fonts/flaticon/font/flaticon.html',
  '/fonts/flaticon/font/Flaticon.svg',
  '/fonts/flaticon/font/Flaticon.ttf',
  '/fonts/flaticon/font/Flaticon.woff',
  '/fonts/flaticon/font/Flaticon.woff2',
  '/images/7 seater Honda BR-V.png',
  '/images/7 seater Peroduo Aruz 2019.png',
  '/images/7 seater Toyota Avanza.png',
  '/images/7 seater Toyota Sienta.png',
  '/images/7_seat.jpg',
  '/images/about.jpg',
  '/images/about2.jpg',
  '/images/about3.jpg',
  '/images/AxiaMenu.png',
  '/images/BMW i8 2019.png',
  '/images/busi.jpg',
  '/images/CKL.png',
  '/images/eco.jpg',
  '/images/hero_1.jpg',
  '/images/hero_2.jpg',
  '/images/hero_3.jpg',
  '/images/Honda Type R.png',
  '/images/img_1.jpg',
  '/images/img_2.jpg',
  '/images/Lamborghini Automobile.png',
  '/images/lux.jpg',
  '/images/MyVi.png',
  '/images/Ng Kwan Hou.jpeg',
  '/images/Nissan GTR.png',
  '/images/Nissan Sentra SR 2020.png',
  '/images/OoiZiChen.png',
  '/images/person_3.jpg',
  '/images/Por Teong Dean.png',
  '/images/post_1.jpg',
  '/images/ProtonMenu.png',
  '/images/rent.jpg',
  '/images/Rolls-Royce Ghost.png',
  '/images/SRO.png',
  '/images/Toyota C-HR.png',
  '/images/viva.png',
  '/images/Volvo S60.png',
  '/images/Wong Tim Hee.png',
  '/images/14.png',
  '/images/15.png',
  '/js/aos.js',
  '/js/bootstrap-datepicker.min.js',
  '/js/bootstrap.min.js',
  '/js/jquery-3.3.1.min.js',
  '/js/jquery-migrate-3.0.1.min.js',
  '/js/jquery-ui.js',
  '/js/jquery.animateNumber.min.js',
  '/js/jquery.countdown.min.js',
  '/js/jquery.easing.1.3.js',
  '/js/jquery.fancybox.min.js',
  '/js/jquery.magnific-popup.min.js',
  '/js/jquery.stellar.min.js',
  '/js/jquery.sticky.js',
  '/js/jquery.waypoints.min.js',
  '/js/main.js',
  '/js/mediaelement-and-player.min.js',
  '/js/owl.carousel.min.js',
  '/js/popper.min.js',
  '/js/slick.min.js',
  '/js/typed.js',
  '/7SeaterCar.html',
  '/about.html',
  '/BusinessCar.html',
  '/cars.html',
  '/index.html',
  '/LuxuryCar.html',
  '/rent.html',
  '/services.html'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
