const jsonBtn = document.querySelector("#cargarJSON");

jsonBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleado.json";

  fetch(url)
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((result) => {
      mostrarHTML(result);
    });
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");

  contenido.innerHTML = `
    <p>Empleado ${nombre}</p>
    <p>Trabajo ${trabajo}</p>
    <p>Empresa ${empresa}</p>

    `;
}
