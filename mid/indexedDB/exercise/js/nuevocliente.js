(function () {
  let DB;
  const form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();

    form.addEventListener("submit", validarCliente);
  });

 

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

    //crear un objeto con la informacion
    const cliente = {
      name,
      email,
      telefono,
      empresa,
      id: Date.now(),
    };
    crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.add(cliente);

    transaction.onerror = function () {
      imprimirAlerta("El usuario ya existe");
    };

    transaction.oncomplete = function () {
      console.log("sdadf");
      imprimirAlerta("Cliente agregado correctamente");
      
      setTimeout(() => {
        window.location.href = "index.html"
      }, 2500);
    };
  }

  
})();
