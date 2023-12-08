function agregar(value) {
  const screen = document.querySelector("#screen");
  screen.value += value;
}

function igual() {
  const screen = document.querySelector("#screen").value;

  if (screen.trim() === "") {
    return;
  }
  result = eval(screen);

  document.querySelector("#screen").value = result;
}

function borrar(e) {
  const screen = document.querySelector("#screen");
  screen.value = "";
}
