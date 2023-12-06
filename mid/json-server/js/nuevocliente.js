import { mostrarAlerta } from "./funciones.js";

(function () {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    // como llave y valor es lo mismo (key: value). Entonces se pone uno solo al declarar el objeto
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    if (validar(cliente)) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }
    console.log("se paso la validacion");
  }

  function validar(obj) {
    //every, revisa una condicion en todos los elementos.
    return !Object.values(obj).every((input) => input !== "");
  }
})();
