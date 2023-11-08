// Escribe, en el lenguaje de programación que desees, un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “Fizz” y, a su vez, los múltiplos de 5 por “Buzz”.
// Para los números que al tiempo son múltiplos de 3 y 5 (como 15), utiliza el combinado “FizzBuzz”.

for (let index = 1; index <= 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log(`${index} Fizz BUzz`);
  } else if (index % 3 == 0) {
    console.log(`${index} Fizz`);
  } else {
    console.log(`${index} Buzz`);
  }
}

// Crea un array de numeros aleatorios y despues verifica que numeros son multiplo de 2 y 3.

const numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
  const numerosAleatorio = Math.floor(Math.random() * 100);
  numerosAleatorios.push(numerosAleatorio);
}

function esMultiploDeDosYTres(numero) {
  console.log(numero);
  return numero % 2 == 0 && numero % 3 == 0;
}

for (const numero of numerosAleatorios) {
  if (esMultiploDeDosYTres(numero)) {
    console.log(`${numero} es múltiplo de 2 y 3`);
  } else {
    console.log(`${numero} no es múltiplo de 2 y 3`);
  }
}

esMultiploDeDosYTres()


// dado el siguiente array ["A63BDA92EB"] separa en letras y numeros

const cadena = "A63BDA92EB";
const letras = [];
const numeros = [];

for (i = 0; i < cadena.length; i++) {
  const caracter = cadena[i];
  console.log(caracter);
  if (isNaN(caracter)) {
    letras.push(caracter);
  } else {
    numeros.push(caracter);
  }
}

// console.log(letras);
// console.log(numeros);
console.log("Letras:", letras.join(""));
console.log("Números:", numeros.join(""));



// dado el siguiente array diferencia cuales son vocales y cuales son consonantes

const caracteres = ["A", "B", "C", "E", "I", "O", "U"];
const vocales = [];
const consonantes = [];

for (let i = 0; i < caracteres.length; i++) {
  const caracter = caracteres[i].toLowerCase(); 

  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    vocales.push(caracteres[i]);
  } else if (caracter >= "a" && caracter <= "z") {
    consonantes.push(caracteres[i]);
  }
}

console.log("Vocales:", vocales);
console.log("Consonantes:", consonantes);



//
const caracteres1 = ["A", "B", "C", "E", "I", "O", "U", "f"];
const vocales1 = []
const consonantes1 = []


for(i = 0; i < caracteres1.length; i++){
  let caracter = caracteres1[i];
  if(caracter !== "A" && caracter !== "E" && caracter !== "I" && caracter !== "O" && caracter !== "U"){
    consonantes1.push(caracter)
    console.log(consonantes1);
  }else{
    vocales1.push(caracter)
    
  }
}
console.log(`CONSONANTES: ${consonantes1}`);
console.log(`VOCALES: ${vocales1}`);