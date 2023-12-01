const txtBtn = document.querySelector("#cargarTxt");

txtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/datos.txt";

  fetch(url)
    .then((response) => {
      console.log(response);

      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
