(function () {
  let DB;

  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const telefonoInput = document.querySelector("#telefono");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();

    //verificar el id de la url
    const parametrosUrl = new URLSearchParams(window.location.search);

    const idCliente = parametrosUrl.get("id");

    //deberia usar async await
    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 100);
    }
  });

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
