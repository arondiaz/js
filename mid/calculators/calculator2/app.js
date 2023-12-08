function agregar(value) {
  const screen = document.querySelector(".screen");
  screen.value += value;
}

function borrar() {
  const screen = document.querySelector(".screen");
  screen.value = "";
}

function resolver(value) {
  const screen = document.querySelector(".screen").value;

  if (screen.trim() === "") {
    return;
  }
  const result = eval(screen);

  // no funciona screen.value = result

  //funciona
  document.querySelector(".screen").value = result;
}
