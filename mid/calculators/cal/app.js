const operacion = (value) =>(document.querySelector("#display").value += value);

const igual = () => {
  const d = document.querySelector("#display").value;
  if (d.trim() === "") {
    return;
  }
  const r = eval(d);

  document.querySelector("#display").value = r;
};

const borrar = () => (document.querySelector("#display").value = "");
