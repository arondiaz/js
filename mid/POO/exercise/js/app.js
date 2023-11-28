// variables y selectores

const form = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

listeners();
function listeners() {
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
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => (total = gasto.cantidad),
      0
    );
    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    this.calcularRestante();
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

  mostrarGastos(gastos) {
    this.limpiarHTML();
    gastos.forEach((gasto) => {
      const { nombre, cantidad, id } = gasto;

      const li = document.createElement("LI");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";

      //2 formas de agregar un id y asignarle el valor.
      // dataset agrega la palabra data- (+ lo que va al lado del punto)
      li.setAttribute("data-id", id);
      //   li.dataset.id = id;

      li.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;

      const btnBorrar = document.createElement("button");
      btnBorrar.textContent = "borrar";
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };

      li.appendChild(btnBorrar);
      gastoListado.appendChild(li);
    });
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
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

  ui.imprimirAlerta("Gasto agregado");

  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);
  ui.actualizarRestante(restante);
  form.reset();
}

function eliminarGasto(id) {
  presupuesto.eliminarGasto(id);
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);
}
