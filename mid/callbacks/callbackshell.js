//NO ES RECOMENDABLE, sólo para saber a que se refiere.
const paises = [];

function nuevoPais(pais, callback) {
  paises.push(pais);
  console.log(`agregado ${pais}`);
  callback();
}

function mostrarPaises() {
  console.log(paises);
}

function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("Canada", mostrarPaises);

    setTimeout(() => {
      nuevoPais("Ecuador", mostrarPaises);

      setTimeout(() => {
        nuevoPais("El Salvador", mostrarPaises);
      }, 3000);
    }, 3000);
  }, 3000);
}

iniciarCallbackHell();
