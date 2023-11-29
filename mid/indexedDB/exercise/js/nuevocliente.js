(function () {
  let DB;
  const form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();

    form.addEventListener("submit", validarCliente);
  });

  function conectarDB() {
    const abrirConexion = window.indexedDB.open("crm", 1);

    abrirConexion.onerror = function () {
      console.log("hubo un error");
    };

    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result;
    };
  }

  function validarCliente(e) {
    e.preventDefault();

    //inputs
    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (name === "" || email === "" || telefono === "" || empresa === "") {
      imprimirAlerta("Todos los campos son obligatorios", "error");
    }
  }

  function imprimirAlerta(mensaje, tipo) {

    const alert = document.querySelector(".alerta")

if(!alert){
    const divMensaje = document.createElement("DIV");
    divMensaje.classList.add( "px-4","py-3","rounded","max-w-lg","mx-auto","mt-6","text-center", "border", "alerta"
    );

    if (tipo === "error") {
      divMensaje.classList.add("bg-red-100", "border-red-400", "text-red-700");
    } else {
      divMensaje.classList.add(
        "bg-green-100",
        "border-green-400",
        "text-green-700"
      );
    }

    divMensaje.textContent = mensaje;

    form.appendChild(divMensaje)

    setTimeout(() => {
        divMensaje.remove()
    }, 2500);
  }

}

})();
