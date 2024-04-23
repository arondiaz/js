// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//1
function countCharacters(text) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    counter++;
  }
  return counter;
}

console.log(countCharacters("Hola Mundo"));

function contarCaracteres(text) {
  return text.length;
}

console.log(contarCaracteres("JavaScript"));

//2
function cut(texto, num) {
  if (num >= texto.length) {
    return console.log("El numero es mayor al largo del texto");
  } else if (num <= texto.length) {
    let result = "";
    for (let index = 0; index < num; index++) {
      result += texto[index];
    }

    return result;
  }
}

console.log(cut("pepe", 5));

function recortar(text, longitud) {
  let resul = text.slice(0, longitud);

  return resul;
}

console.log(recortar("Hola Pepe", 7));

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function four(string, num) {
  let result = (string + " ").repeat(num);
  return result;
}

console.log(four("Pepe", 3));

function three(string, separador) {
  let res = string.split(separador);

  return res;
}
console.log(three("Hola como estas?", " "));

// function three(string) {
//   let arr = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== " ") {
//       arr += string;
//     } else{

//     }
//   }
//   return arr;
// }
// console.log(three("hola pepe"));
