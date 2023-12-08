function add(value) {
  const screen = document.querySelector("#pantalla");
  screen.value += value;
}

function resolve() {
  const screen = document.querySelector("#pantalla").value;
  const operacion = eval(screen);

    if(screen.trim() === ""){
        return
    }

  document.querySelector("#pantalla").value = operacion;
}

function borrar() {
  document.querySelector("#pantalla").value = "";
}
