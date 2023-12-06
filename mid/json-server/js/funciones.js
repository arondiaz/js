export function mostrarAlerta(msg) {
  const alert = document.querySelector(".alert");

  if (!alert) {
    const alert = document.createElement("P");
    alert.textContent = msg;
    alert.classList.add(
      "alert",
      "bg-red-600",
      "text-center",
      "max-width-lg",
      "mt-8",
      "py-4",
      "px-6"
    );

    const formulario = document.querySelector("#formulario");

    formulario.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
}
