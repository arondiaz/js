const add = (val) => {
  let screen = document.querySelector("#screen");
  screen.value += val;
};

const clean = () => {
  let screen = document.querySelector("#screen");

  screen.value = "";
};

const operation = () => {
  let screen = document.querySelector("#screen");

  screen.value = eval(screen.value);
};

const suprimir = () => {
  let screen = document.querySelector("#screen").value;

  screen = screen.slice(0, -1);
  document.querySelector("#screen").value = screen;
};
