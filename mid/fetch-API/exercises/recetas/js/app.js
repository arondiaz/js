const selectCategories = document.querySelector("#categorias");

const resultCategories = document.querySelector("#resultado");
const modal = new bootstrap.Modal("#modal", {});

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
    recetaButton.dataset.bsTarget = "#modal";
    recetaButton.dataset.bsToggle = "modal";
    recetaButton.onclick = function () {
      seleccionaReceta(idMeal);
    };

    recetaBody.appendChild(recetaHeading);
    recetaBody.appendChild(recetaButton);

    recetaCard.appendChild(recetaImagen);
    recetaCard.appendChild(recetaBody);

    recetaContenedor.appendChild(recetaCard);

    resultCategories.appendChild(recetaContenedor);
  });

  function seleccionaReceta(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((receta) => {
        mostrarInformacionReceta(receta.meals[0]);
      });
  }

  function mostrarInformacionReceta(receta) {
    const {
      idMeal,
      strArea,
      strCategory,
      strMeal,
      strInstructions,
      strMealThumb,
    } = receta;

    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");

    modalTitle.textContent = strMeal;

    //en un formulario no es recomendable usar innerHTML ya que el usuario podria inyectar codigo
    modalBody.innerHTML = `<img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
    <h3>Instrucciones</h3>
    <p>${strInstructions}}</p>
    <h3>Ingredientes</h3>
    `;

    //

    const listGroup = document.createElement("UL");
    listGroup.classList.add("list-group");
    for (let i = 1; i <= 20; i++) {
      if (receta[`strIngredient${i}`]) {
        const ingrediente = receta[`strIngredient${i}`];
        const cantidad = receta[`strMeasure${i}`];

        const ingredienteLi = document.createElement("LI");
        ingredienteLi.classList.add("list-group-item");
        ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

        listGroup.appendChild(ingredienteLi);
      }
    }
    modalBody.appendChild(listGroup);

    const modalFooter = document.querySelector(".modal-footer");

    limpiarHTML(modalFooter);
    const btnFavorito = document.createElement("BUTTON");
    btnFavorito.classList.add("btn", "btn-danger", "col");
    btnFavorito.textContent = existeLocalStorage(idMeal)
      ? "Eliminar favorito"
      : "Agregar a favoritos";
    btnFavorito.onclick = function () {
      if (existeLocalStorage(idMeal)) {
        eliminarFavoritos(idMeal);
        btnFavorito.textContent = "Guardar Favoritos";
        mostrarToast("Eliminado correctamente")
        return;
      }

      agregarFavorito({
        id: idMeal,
        title: strMeal,
        img: strMealThumb,
      });
      btnFavorito.textContent = "Eliminar Favorito";
      mostrarToast("Agg correctamente")
    };

    const btnCerrar = document.createElement("BUTTON");
    btnCerrar.classList.add("btn", "btn-danger", "col");
    btnCerrar.textContent = "cerrar";
    btnCerrar.onclick = function () {
      modal.hide();
    };

    modalFooter.appendChild(btnFavorito);
    modalFooter.appendChild(btnCerrar);

    modal.show();
  }

  function agregarFavorito(receta) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    localStorage.setItem("favoritos", JSON.stringify([...favoritos, receta]));
  }

  function existeLocalStorage(id) {
    
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];

    for (const fav of favoritos) {
      if (fav.id === id) {
        return true;
      }
    }
    return false;
  }

  function eliminarFavoritos(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    const nuevosFavoritos = favoritos.filter((favorito) => favorito.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  }

  function mostrarToast(mensaje) {
    const toastDiv = document.querySelector("#toast");
    const toastBody = document.querySelector(".toast-body");
    toastBody.textContent = mensaje;
    const toast = new bootstrap.Toast(toastDiv);
    toast.show();
  }

  function limpiarHTML(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}
