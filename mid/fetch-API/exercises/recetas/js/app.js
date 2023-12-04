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
      console.log(data);
    });
}
