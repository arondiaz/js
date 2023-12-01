//API Fullscreen
const pantallaCompleta = document.querySelector("#abrir-pantalla-completa");
const salirPantallaCompleta = document.querySelector(
  "#salir-pantalla-completa"
);

pantallaCompleta.addEventListener("click", abrirPantalla);

salirPantallaCompleta.addEventListener("click", cerrarPantalla);

function abrirPantalla() {
    document.documentElement.requestFullscreen()
}

function cerrarPantalla() {
    document.exitFullscreen()
}
