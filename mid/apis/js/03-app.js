//No funciona correctamente o no está bien aplicado. Pero existe la funcionalidad para detectar si el usuario perdió la conexion 
window.addEventListener("online", actualizarEstado)
window.addEventListener("offline", actualizarEstado)


actualizarEstado()
function actualizarEstado() {
    if(navigator.onLine){
        console.log("estas conectado");
    }else{
        console.log("desconectado");
    }
}