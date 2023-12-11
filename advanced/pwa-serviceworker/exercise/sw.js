//cache
const nombreChache = "apv-v1";

const archivos = [
  "./",
  "./index.html",
  "./css/bootstrap.css",
  "./css/styles.css",
  "./js/app.js",
  "./js/apv.js",
  "./error.html"
];

//cuando se instala el service worker, install solo se ejecuta 1 vez al instalarse.
self.addEventListener("install", (e) => {
  console.log("Instalado el service worker");

  e.waitUntil(
    caches.open(nombreChache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivos);
    })
  );
});

// this.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches
//       .open("v1")
//       .then((cache) =>
//         cache.addAll([
//           "/",
//           "/index.html",
//           // "./css/bootstrap.css",
//           // "./css/styles.css",
//           // "./js/app.js",
//           // "./js/apv.js",
//         ]),
//       ),
//   );
// });

//activar el service worker
self.addEventListener("activate", (e) => {
  console.log("service worker activado");

  e.waitUntil(
    caches.keys().then(keys => {
      console.log(keys);
    })
  )
});

//PWA se pueden instalar en pc o movil, para eso debe tener un manifest válido, dominio https o localhost y el fetch

//evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch..", e);

  //para que funcione la pagina de error, hay que poner el proyecto en una carpeta. porque con live server al ser rutas no funciona http://127.0.0.1:5500/advanced/pwa-serviceworker/exercise/index.html 
  e.respondWith(
    caches
      .match(e.request)
      .then((responseCache) => {
        return responseCache;
      })
      // .catch(() => catches.match("/error.html"))
  );
});
