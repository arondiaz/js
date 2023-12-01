//visibilityState, para detectar si el usuario esta en la página o no, ideal para pausar un video.

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("reproducir el video");
  } else {
    console.log("pausar el video");
  }
});
