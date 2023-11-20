// Callbacks, Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
//La mayoría del tiempo estamos creando programas y aplicaciones que operan en una forma sincrónica. En otras palabras, algunos de nuestra operaciones comienzan solo después de que se hayan completado las anteriores. Usualmente, cuando solicitamos datos desde otras fuentes como una API externa, no siempre sabemos cuando nuestros datos serán devueltos. En estos casos queremos esperar la respuesta, pero no queremos que toda nuestra aplicación se detenga mientras se recuperan los datos. Estas son situaciones dónde las funciones callback resultan útiles.

const paises = ["Argentina", "Brasil", "Australia", "Colombia"];

function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
}

//El pais es el primer parametro, y la funcion que se llama es el segundo parametro.
function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 2000);
}

mostrarPaises();

//El pais es el primer parametro, y la funcion que se llama es el segundo parametro en este caso la definimos como mostrarPaises.
nuevoPais("Peru", mostrarPaises);
