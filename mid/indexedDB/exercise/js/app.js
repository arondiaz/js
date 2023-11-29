// //
// La sintaxis (function () {})(); se conoce comúnmente como una "función autoinvocada" o "IIFE" (Immediately Invoked Function Expression) en inglés.

// Esta técnica se utiliza en JavaScript por varias razones:
// Encapsulación de Ámbito (Scope): La función autoinvocada crea un nuevo ámbito (scope) para las variables declaradas dentro de ella. Esto ayuda a prevenir la contaminación del ámbito global y evita posibles conflictos de nombres de variables.

// Prevención de Conflicto de Nombres:
// Al encapsular el código en una función autoinvocada, las variables definidas dentro de la función no entran en conflicto con las variables definidas fuera de ella. Esto es particularmente útil cuando se trabaja con bibliotecas o scripts que pueden tener variables con nombres comunes.

// Modularización y Privacidad:
// La función autoinvocada es útil para crear módulos y mantener la privacidad de las variables. Las variables dentro de la función no son accesibles desde fuera, a menos que sean explícitamente expuestas.

// Evitar la Polución del Espacio Global:
// Al limitar la cantidad de variables y funciones en el ámbito global, se reduce la probabilidad de colisiones entre diferentes scripts o bibliotecas que pueden estar cargados en la misma página web.

// Control de Tiempo de Ejecución:
// Al usar una IIFE, el código dentro de la función se ejecuta inmediatamente cuando el archivo se carga, en lugar de esperar una llamada explícita. Esto puede ser útil para realizar configuraciones iniciales o ejecutar código que debe ejecutarse inmediatamente.

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    crearDB();

    if (window.indexedDB.open("crm", 1)) {
      obtenerClientes();
    }
  });

  function crearDB() {
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = function () {
      console.log("Hubo un error");
    };

    crearDB.onsuccess = function () {
      DB = crearDB.result;
    };

    crearDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("Hi");
    };
  }

  function obtenerClientes() {
    const abrirConexion = window.indexedDB.open("crm", 1);
    abrirConexion.onerror = function () {
      console.log("hubo un error");
    };

    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result;
      console.log(DB);

      const objectStore = DB.transaction("crm").objectStore("crm");

      objectStore.openCursor().onsuccess = function (e) {
        const cursor = e.target.result;

        if (cursor) {
          const { name, empresa, email, telefono, id } = cursor.value;

          const listadoClientes = document.querySelector("#listado-clientes");

          listadoClientes.innerHTML += `
          <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
              <p class="text-sm leading-10 text-gray-700"> ${email} </p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
              <p class="text-gray-700">${telefono}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
              <p class="text-gray-600">${empresa}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
              <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
              <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
          </td>
            </tr>
          `;

          cursor.continue();
        } else {
          console.log("no hay registros");
        }
      };
    };
  }
})();
