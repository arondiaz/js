const selectCategories = document.querySelector("#categorias");

const resultCategories = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  traerCategorias();
});

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
    option.value = idCategory;
    option.textContent = strCategory;

    selectCategories.appendChild(option);
  });

  console.log(selectCategories.value);
}

