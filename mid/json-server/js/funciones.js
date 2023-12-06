export function mostrarAlerta(msg) {
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    const alerta = document.createElement("P");

    alerta.classList.add("bg-red-500","border-red-400","px-4","py-3","text-center","max-w-lg","mx-auto","mt-6");
    alerta.textContent = msg;

    const formulario = document.querySelector("#formulario");
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 2500);
  }
}
