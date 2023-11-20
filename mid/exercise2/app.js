document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.querySelector("#send-note");

  sendButton.addEventListener("click", function () {
    const noteInput = document.querySelector("#note");
    const note = parseInt(noteInput.value);

    switch (note) {
      case 1:
        result = "Muy deficiente";
        break;
      case 2:
        result = "Deficiente";
        break;
      case 3:
      case 4:
        result = "Regular";
        break;
      case 5:
        result = "Suficiente";
        break;
      case 6:
        result = "Bien";
        break;
      case 7:
        result = "Notable";
        break;
      case 8:
      case 9:
        result = "Sobresaliente";
        break;
      case 10:
        result = "Matrícula de honor";
        break;
      default:
        result = "La nota ingresada no es válida";
    }

    mostrarModal(result);
  });

  function mostrarModal(mensaje) {
    const modal = document.querySelector(".modal-bg");
    const modalMessage = document.querySelector(".result");
    
    modal.style.display = "block"
    modalMessage.textContent = mensaje;
   console.log(modal);
   console.log(modalMessage);

    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  
});
