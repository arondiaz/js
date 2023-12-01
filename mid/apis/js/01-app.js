const notificarBtn = document.querySelector("#notificar");

//mostrar notificaciones?
// si se permite, el resultado es grantied
// si se bloquea, el resultado es denied
// si se ignora o se cierra, el resultado es default.
notificarBtn.addEventListener("click", () => {
  Notification.requestPermission()
  .then((result) => {
    console.log("el resultado es", result);
  });
});


const verNotificacion = document.querySelector("#verNotificacion")

verNotificacion.addEventListener("click", () => {
    if(Notification.permission === "granted"){
       const notification = new Notification("Tienes 4243 mensajes", {
            icon: "img/ccj.png",
            body: "Nunca te rindas"
        })

        notification.onclick = function () {
            window.open("https://arondiaz.vercel.app")
            
        }
    }
})