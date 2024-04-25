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

// console.log(contarCaracteres("JavaScript"));

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

// console.log(cut("pepe", 5));

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

// console.log(four("Pepe", 3));

const repetirText = (string, num) => {
  if (!string) {
    return console.warn("No hay texto");
  }

  if (num === undefined) {
    return console.warn("Debe ingresar un numero");
  }

  if (num === 0) {
    return console.log("El numero debe ser mayor a 0");
  }

  if (Math.sign(num) === -1) {
    return console.log("El numero no puede ser negativo");
  }

  let word = (string + " ").repeat(num);
  return word;
};

// console.log(repetirText("Hola", 3));

function three(string, separador) {
  let res = string.split(separador);

  return res;
}
// console.log(three("Hola como estas?", " "));

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

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

/*  */

// function revert(text) {
//   let res = "";

//   for (let i = text.length - 1; i >= 0; i--) {
//     res += text[i];
//   }
//   return res;
// }

// console.log(revert("Hola Pepe"));

// console.log("React avanzado".split("").reverse().join(""));

const revert = (string) => {
  let res = "";

  for (let i = string.length - 1; i >= 0; i--) {
    res += string[i];
  }

  return res;
};
// console.log(revert("Hola react pro"));

/***************************************** */
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena = (cadena = "", palabra = "") => {
  if (!cadena) {
    return console.log("No hay texto");
  }

  if (!palabra) {
    return console.log("No hay palabra a evaluar");
  }

  let i = 0;
  let contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(palabra, i);
    // console.log(`i es ${i}`);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.log(`la palabra ${palabra} se repite ${contador} veces`);
};

// textoEnCadena("React, Java, Preact, Java, Laravel, Php, Next, Bone", "Java");

/********************/
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function palindromo(text) {
  let alreves = "";

  for (let i = text.length - 1; i >= 0; i--) {
    alreves += text[i];
  }

  if (text.toLowerCase() === alreves.toLowerCase()) {
    return console.log(`${text} es una palabra palindromo`);
  }

  return console.log(`${text} NO es palindromo`);
}

// palindromo("Salas");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function siete(texto) {
  if (!texto) {
    return console.log("texto no existe");
  }

  let palabraAlreves = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    palabraAlreves += texto[i];
  }

  if (texto.toLowerCase() === palabraAlreves.toLowerCase()) {
    return console.log("Es palindromo");
  } else {
    return console.log("No es palindromo");
  }
}

// siete("Salas");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto, patron) =>
  !texto
    ? console.log("No ingresaste el texto")
    : !patron
    ? console.log("No ingresaste el patron")
    : console.log(texto.replace(new RegExp(patron, "ig"), ""));

// eliminarCaracteres("xyz1, xyz2, xyz3", "xyz");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function aleatory() {
  return console.log(Math.round(Math.random() * 100) + 500);
}

// aleatory();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numReverse = (num) => {
  if (typeof num !== "number") {
    return console.log("debe ingresar un numero");
  }

  num = num.toString();

  let numRev = num.split("").reverse().join("");
  numRev === num
    ? console.log(`es capicua, ${true}`)
    : console.log(`no es capicua, ${false}`);
};

// numReverse(23232);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

// function primo(num) {
//   if (typeof num !== "number") {
//     return console.log("debe ingresar un numero");
//   }

// }

// primo(7)

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (num) => {
  if (typeof num !== "number") {
    return console.log("debes ingresar un numero");
  }

  if (num % 2 === 0) {
    return console.log(`El ${num} es par`);
  }

  return console.log(`El ${num} es impar`);
};

parImpar(4444);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const grados = (temperatura = undefined, grados = undefined) => {
  temperatura === undefined
    ? console.log("Debes ingresar la temperatura")
    : grados === undefined
    ? console.log("Debes ingresar C o F")
    : grados !== "C" && grados !== "F"
    ? console.log("Debes ingresar C o F")
    : grados === "C"
    ? console.log(temperatura * (9 / 5) + 32)
    : grados === "F"
    ? console.log(((temperatura - 32) * 5) / 9)
    : console.log("Vuelve a intentarlo");
};

grados(3, "C");
