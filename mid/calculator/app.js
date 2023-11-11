function agregar(value) {
  document.querySelector("#pantalla").value += value;
}

function borrar() {
  document.querySelector("#pantalla").value = "";
}

function calcular() {
  const valorPantalla = document.querySelector("#pantalla").value;

  if (valorPantalla.trim() === "") {
    return;
  }

  const resultado = eval(valorPantalla);

  document.querySelector("#pantalla").value = resultado;
}
