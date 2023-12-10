//cache
const nombreChache = "apv-v1";

const archivos = [
  "./",
  "./index.html",
  "./css/bootstrap.css",
  "./css/styles.css",
  "./js/app.js",
  "./js/apv.js",
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

  console.log(e);
});

//PWA se pueden instalar en pc o movil, para eso debe tener un manifest válido, dominio https o localhost y el fetch

//evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch..", e);
});
