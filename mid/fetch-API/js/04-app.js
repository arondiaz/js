const apiBtn = document.querySelector("#cargarAPI");

apiBtn.addEventListener("click", traerDatos);

function traerDatos() {
  const url = "https://picsum.photos/list";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      mostrarHTML(data);
    });
}

function mostrarHTML(datos) {
  const container = document.querySelector(".contenido");
  let html = "";

  datos.forEach((dato) => {
    const { author, post_url, format, filename, id } = dato;

    html += `<p>${author}</p>
    <a href="${post_url}" target="_blank"> Ver imagen </a>`;

    container.innerHTML = html;
  });
}
