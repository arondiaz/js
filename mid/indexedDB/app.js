let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 5000);
});

function crmDB() {
  //crear base de datos version 1.0
  // window es un objeto, indexedDB es una propiedad de window, open el metodo y lo que esta entre () son los parametros.
  let crmDB = window.indexedDB.open("crm", 1);

  //si hay un error
  crmDB.onerror = function () {
    console.log("Hubo un error");
  };

  //si se creo bien
  crmDB.onsuccess = function () {
    console.log("base de datos creada con éxito!");

    DB = crmDB.result;
  };

  //configuracion de la base de datos, se ejecuta 1 sola vez al crearse la base de datos.
  crmDB.onupgradeneeded = function (e) {
    console.log("Este método solo se ejecuta una vez.");
    //el resultado del evento que se origina al crearse la base de datos.
    const db = e.target.result;

    //
    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    //Definimos las columnas,((primer parametro = indice), (segundo parametro = propiedad), {si necesitan ser unicos o no})
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("Columnas creadas correctamente");
  };
}

//ingreso de registros
function crearCliente() {
  //transaction en base de datos: las transacciones se utilizan para agrupar operaciones de lectura y escritura en una unidad coherente y garantizar la integridad de los datos. ([seleccionamos la DB], "sellecionar modo")
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("completo");
  };

  transaction.onerror = function () {
    console.log("Hubo un error");
  };

  //objectStore: una colección de datos estructurados en forma de objetos.
  const objectStore = transaction.objectStore("crm");

  const nuevoCliente = {
    telefono: 23232,
    nombre: "aron",
    email: "asask@gmail.com",
  };

  //metodos crud, add, put, post, delete
  const peticion = objectStore.add(nuevoCliente);
  console.log(peticion);
}
