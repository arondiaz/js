import { mostrarAlerta } from "./funciones.js";
import { createClienteApi } from "./API.js";
(function () {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", crearCliente);

  function crearCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    if (validarFormulario(cliente)) {
      mostrarAlerta("todos los campos son obligatorios");
      return;
    }

    createClienteApi(cliente);
  }
  function validarFormulario(obj) {
    // console.log(obj);
    // return !Object.values(obj).every((input) => input !== "");

    if (
      obj.nombre === "" ||
      obj.email === "" ||
      obj.telefono === "" ||
      obj.empresa === ""
    ) {
      return true;
    }
  }
})();
