(function () {
  let DB;
  //
  let idCliente;

  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const telefonoInput = document.querySelector("#telefono");

  const form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();

    //actualiza el registro
    form.addEventListener("submit", actualizarCliente);

    //verificar el id de la url
    const parametrosUrl = new URLSearchParams(window.location.search);

    idCliente = parametrosUrl.get("id");

    //deberia usar async await
    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 100);
    }
  });

  function actualizarCliente(e) {
    e.preventDefault();
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      empresaInput.value === "" ||
      telefonoInput.value === ""
    ) {
      imprimirAlerta("Todos los campos deben estar completos", "error");

      return;
    }

    //actualizar cliente

    const clienteActualizado = {
      name: nameInput.value,
      email: emailInput.value,
      empresa: empresaInput.value,
      telefono: telefonoInput.value,
      id: Number(idCliente),
    };

    console.log(clienteActualizado);
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.put(clienteActualizado);

    transaction.oncomplete = function () {
      imprimirAlerta("editado completamente");

      setTimeout(() => {
        window.location.href = "index.html"
      }, 2000);
    };

    transaction.onerror = function () {
      imprimirAlerta("hubo un error", "error");
    };
  }

  function obtenerCliente(id) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    const cliente = objectStore.openCursor();
    cliente.onsuccess = function (e) {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id === Number(id)) {
          llenarFormulario(cursor.value);
        }
        cursor.continue();
      }
    };
  }

  function llenarFormulario(datos) {
    console.log(datos);
    const { name, email, empresa, telefono } = datos;
    nameInput.value = name;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    emailInput.value = email;
  }

  function conectarDB() {
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = function () {
      console.log("Hubo un error");
    };

    crearDB.onsuccess = function () {
      DB = crearDB.result;
    };
  }
})();
