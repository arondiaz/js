const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

//promises
// function obtenerDatos() {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

//async await
async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);
    const result = await respuesta.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
