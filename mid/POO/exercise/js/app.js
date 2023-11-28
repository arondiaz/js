// variables y selectores

const form = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

listeners();
function listeners(params) {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  form.addEventListener("submit", agregarGasto);
}

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    const { presupuesto, restante } = cantidad;
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("DIV");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    divMensaje.textContent = mensaje;

    document.querySelector(".primario").insertBefore(divMensaje, form);

    setTimeout(() => {
      divMensaje.remove();
    }, 2500);
  }
}

const ui = new UI();
let presupuesto;

function preguntarPresupuesto(params) {
  const presupuestoUsuario = prompt("¿cual es tu presupuesto?");

  //al apretar cancelar es null
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
  e.preventDefault();

  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no válida");
    return;
  }

  // une nombre y cantidad al gasto. contrario a destructuring
  const gasto = { nombre, cantidad, id: Date.now() };
  presupuesto.nuevoGasto(gasto);

  ui.imprimirAlerta("Gasto agregado")
}
