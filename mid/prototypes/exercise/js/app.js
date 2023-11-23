function Seguro(marca, año, tipo) {
  this.marca = marca;
  this.año = año;
  this.tipo = tipo;
}

function UI() {}

UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("OPTION");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

//Muestra alertas en pantalla
UI.prototype.mostarMensaje = (mensaje, tipo) => {
  const div = document.createElement("DIV");
  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }

  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  const form = document.querySelector("#cotizar-seguro");
  form.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 2500);
};

const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones();
});

listeners();
function listeners() {
  const form = document.querySelector("#cotizar-seguro");
  form.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  //Marca seleccionada
  const marca = document.querySelector("#marca").value;

  //Año seleccionado
  const year = document.querySelector("#year").value;

  //Tipo de modelo
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    ui.mostarMensaje("Todos los campos son obligatorios", "error");
  } else {
    ui.mostarMensaje("Cotizando...", "correcto");
  }
}
