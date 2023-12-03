const select = document.querySelector("#criptomonedas");

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();
});

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
