const select = document.querySelector("#criptomonedas");
const moneda = document.querySelector("#moneda");
const form = document.querySelector("#formulario");
const result = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();

  select.addEventListener("change", cotizarCriptomonedas);
  moneda.addEventListener("change", cotizarMoneda);

  form.addEventListener("submit", validarObj);
});

objCotizar = {
  moneda: "",
  criptomoneda: "",
};

function cotizarMoneda(e) {
  objCotizar.moneda = e.target.value;
}

function cotizarCriptomonedas(e) {
  objCotizar.criptomoneda = e.target.value;
  console.log(objCotizar);
}

function validarObj(e) {
  e.preventDefault();
  const { moneda, criptomoneda } = objCotizar;
  if (moneda === "" || criptomoneda === "") {
    return mostrarAlerta("Campos vacíos");
  }

  consultarApi();
}

function mostrarAlerta(msg) {
  const alerta = document.querySelector(".alert");

  if (!alerta) {
    const div = document.createElement("DIV");
    const p = document.createElement("P");
    p.textContent = msg;
    div.classList.add("alert");

    div.appendChild(p);
    result.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 2000);
  }
}

function obtenerCriptomonedas(criptomonedas) {
  return new Promise((resolve) => {
    resolve(criptomonedas);
  });
}

function consultarCriptomonedas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((response) => response.json())
    .then((data) => obtenerCriptomonedas(data.Data))
    .then((criptomonedas) => {
      selectCriptomonedas(criptomonedas);
    });
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("OPTION");
    option.value = Name;
    option.textContent = FullName;

    select.appendChild(option);
  });
}

function consultarApi() {
  const { moneda, criptomoneda } = objCotizar;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  spinner();
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((cotizacion) => {
      mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]);
    });
}

function mostrarCotizacion(data) {
  limpiarHTML();
  const { HIGHDAY, LOWDAY, PRICE } = data;

  const div = document.createElement("DIV");
  const price = document.createElement("P");
  const low = document.createElement("P");
  const high = document.createElement("P");
  price.textContent += "Precio actual " + PRICE;
  high.textContent = `Más alto del día ${HIGHDAY}`;
  low.textContent += `Más bajo del día ${LOWDAY}`;

  div.appendChild(price);
  div.appendChild(high);
  div.appendChild(low);

  result.appendChild(div);
}

function limpiarHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function spinner() {
  limpiarHTML();
  const spin = document.createElement("DIV");
  spin.classList.add("spinner");

  result.appendChild(spin);
}
