const selectCategories = document.querySelector("#categorias");

const resultCategories = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  traerCategorias();

  selectCategories.addEventListener("change", seleccionarCategorias);
});

const objCategory = {
  nombre: "",
  id: "",
};

function traerCategorias(e) {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((categories) => {
      infoCategorias(categories.categories);
    });
}

function infoCategorias(info) {
  info.forEach((cat) => {
    const { idCategory, strCategory } = cat;
    const option = document.createElement("OPTION");
    option.value = strCategory;
    option.textContent = strCategory;

    selectCategories.appendChild(option);
  });
}

function seleccionarCategorias(e) {
  const selectedCategory = e.target.value;

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
  // console.log(url);
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      mostrarRecetas(data.meals);
    });
}

function mostrarRecetas(platos) {
  limpiarHTML(resultCategories);

  const heading = document.createElement("H2");
  heading.classList.add("text-center", "text-black", "my-5");
  heading.textContent = platos.length ? "Resultados" : "No hay resultados";
  resultCategories.appendChild(heading);


  platos.forEach((plato) => {
    const { idMeal, strMeal, strMealThumb } = plato;
    const recetaContenedor = document.createElement("DIV");
    recetaContenedor.classList.add("col-md-4");

    const recetaCard = document.createElement("DIV");
    recetaCard.classList.add("card", "mb-4");

    const recetaImagen = document.createElement("IMG");
    recetaImagen.classList.add("card-img-top");
    recetaImagen.alt = `${strMeal}`;
    recetaImagen.src = strMealThumb;

    const recetaBody = document.createElement("DIV");
    recetaBody.classList.add("card-boy");

    const recetaHeading = document.createElement("H3");
    recetaHeading.classList.add("card-title", "mb-3");
    recetaHeading.textContent = strMeal;

    const recetaButton = document.createElement("BUTTON");
    recetaButton.classList.add("btn", "btn-danger", "w-100");
    recetaButton.textContent = "Ver Receta";

    recetaBody.appendChild(recetaHeading);
    recetaBody.appendChild(recetaButton);

    recetaCard.appendChild(recetaImagen);
    recetaCard.appendChild(recetaBody);

    recetaContenedor.appendChild(recetaCard);

    resultCategories.appendChild(recetaContenedor);
  });

  function limpiarHTML(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}
