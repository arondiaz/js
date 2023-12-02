const container = document.querySelector(".container");
const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.addEventListener("load", () => {
  form.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  const cityInput = document.querySelector("#ciudad").value;
  const selectInput = document.querySelector("#pais").value;

  if (cityInput.trim() === "" || selectInput === "") {
    mostrarAlerta("Todos los campos son obligatorios");
  }
}

function mostrarAlerta(msg) {
  let p = document.querySelector(".alerta");
  if (!p) {
    let p;
    div = document.createElement("DIV");
    p = document.createElement("P");
    p.textContent = msg;
    div.classList.add("flex", "justify-center");
    p.classList.add("alerta","bg-red-400","text-white", "bolder","mt-8","py-4","px-4","max-w-md"
    );
    console.log(p);
    div.appendChild(p);
    container.appendChild(div);
  }

  setTimeout(() => {
    p.remove();
  }, 2500);
}
