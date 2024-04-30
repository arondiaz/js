document.querySelector("#buscar").addEventListener("click", () => {
  let city = document.getElementById("ciudad").value;

  if (city) {
    getData(city);
  }
});

const getData = async (city) => {
  let apiKey = "743511784076358b1e0680d904c985af";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    await mostrarDatos(data);
  } catch (error) {
    console.log(error.message);
  }
};

const mostrarDatos = (resultado) => {
  const divResult = document.querySelector("#result");

  divResult.innerHTML = "";

  let temperatura = resultado.main.temp;

  const showTemperature = document.createElement("H2");

  showTemperature.textContent = Math.floor(temperatura - 273) + "°C";

  divResult.appendChild(showTemperature);
};
