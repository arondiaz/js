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
