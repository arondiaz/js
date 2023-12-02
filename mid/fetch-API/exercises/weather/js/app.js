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
  const apiId = ""

  const url = 
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

  console.log(url);
}
