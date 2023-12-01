// const jsonArrayBtn = document.querySelector("#cargarJSONArray");

// jsonArrayBtn.addEventListener("click", llamarArray);

// function llamarArray() {
//   const url = "data/empleados.json";

//   fetch(url)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       mostrarHTML(data);
//     });
// }

// function mostrarHTML(data) {
//   const container = document.querySelector(".contenido");

//   let html = "";

//   data.forEach((user) => {
//     const { id, empresa, trabajo, nombre } = user;
//     html += `
//    <p>Empleado ${nombre}</p>
//    <p>Trabajo ${trabajo}</p>
//    <p>Empresa ${empresa}</p>
//    `;
//     container.innerHTML = html;
//   });
// }




///Llamado automaticamente al cargar el DOM
document.addEventListener("DOMContentLoaded", llamarArray);

function llamarArray() {
  const url = "data/empleados.json";

  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      mostrarHTML(data);
    });
}

function mostrarHTML(data) {
  const container = document.querySelector(".contenido");

  let html = "";

  data.forEach((user) => {
    const { id, empresa, trabajo, nombre } = user;
    html += `
   <p>Empleado ${nombre}</p>
   <p>Trabajo ${trabajo}</p>
   <p>Empresa ${empresa}</p>
   `;
    container.innerHTML = html;
  });
}
