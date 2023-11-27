function Seguro(marca, año, tipo) {
  this.marca = marca;
  this.año = año;
  this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
  /* 
  1= americano 1.15
  2= asiatico 1.05
  3= europeo 1.35
  */

  let cantidad;
  const base = 2000;

  console.log(this.marca);
  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;

    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;

    default:
      break;
  }

  //leer el año
  const diferencia = new Date().getFullYear() - this.year;

  //cada año que la diferencia es mayor, el costo va a reducirse un 3%
  cantidad -= (diferencia * 3 + cantidad) / 100;

  /*
  Si el seguro es basico se multiplica por un 30% mas 
  si el seguro es completo se multiplica por un 50% mas
  */

  if (this.tipo === "basico") {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }

  return cantidad;
};
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

UI.prototype.mostrarResultado = (total, seguro) => {
  //
  const div = document.createElement("DIV");
  div.classList.add("mt-10");

  div.innerHTML = `
  <p class="header"> Tu resumen </p>
  <p class="font-bold"> Total: ${total}</p>
  `;

  const resultadoDiv = document.querySelector("#resultado");
  resultadoDiv.appendChild(div);
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
  }

  ui.mostarMensaje("Cotizando...", "correcto");

  //Instanciar seguro
  const seguro = new Seguro(marca, year, tipo);
  const total = seguro.cotizarSeguro();
console.log(total);
  ui.mostrarResultado(total, seguro);
}
