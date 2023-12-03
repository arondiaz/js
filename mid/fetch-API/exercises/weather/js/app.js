// require('dotenv').config();
// const apikey= process.env.API_KEY;

const container = document.querySelector(".container");
const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.addEventListener("load", () => {
  form.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  const cityInput = document.querySelector("#ciudad").value;
  const selectInput = document.querySelector("#pais").value;

  if (cityInput.trim() === "" || selectInput === "") {
    mostrarAlerta("Todos los campos son obligatorios");
    return;
  }

  consultarAPI(cityInput, selectInput);
}

function mostrarAlerta(msg) {
  let p = document.querySelector(".alerta");
  if (!p) {
    let p;
    div = document.createElement("DIV");
    p = document.createElement("P");
    p.textContent = msg;
    div.classList.add("flex", "justify-center");
    p.classList.add(
      "alerta",
      "bg-red-400",
      "text-white",
      "bolder",
      "mt-8",
      "py-4",
      "px-4",
      "max-w-md"
    );
    div.appendChild(p);
    container.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 2500);
  }
}

//esperando a que se active la apiKey
function consultarAPI(city, country) {
  const apiKey = "226c26da59da26a9eb31522ae18ae538"

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      limpiarHtml();
      //Si buscamos por una ciudad que no existe, el catch no va a tomar el error ya que la peticion si se está realizando.
      if (data.cod === "404") {
        mostrarAlerta("Ciudad no encontrada");
        return;
      }
      console.log(data);
      mostrarInfo(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function mostrarInfo(data) {
  const {
    main: { temp, temp_max, temp_min },
  } = data;

  const centigrados = kelvinACentrigrados(temp);
  const div = document.createElement("DIV");

  div.innerHTML = `<p>Ciudad:</p>
  <p>${centigrados} &#8451</p>
  <p></p>>

  `;

  result.appendChild(div);
}

function kelvinACentrigrados(grados) {
  return parseInt(grados - 273.15);
}

function limpiarHtml() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}
