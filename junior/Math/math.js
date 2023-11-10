//Raiz
raiz = Math.sqrt(25);

document.write(raiz + "<br>");

//Raiz cúbica
raizCubica = Math.cbrt(25);

document.write(raizCubica + "<br>");

//Maximo
max = Math.max(4, 2, 55, 2, 5, 6, 7);

document.write(max + "<br>");

//Mínimo
min = Math.min(4, 2, 55, 2, 5, 6, 7);

document.write(min + "<br>");

//random

randomNum = Math.random() * 100;

//round, redondea hacia el numero mas grande
let result = Math.round(randomNum);

document.write(randomNum + "<br>");
document.write(result + "<br>");

//floor, redondea para abajo

// for (let i = 0; i < 1000; i++) {
//   let number = Math.random() * 99;
//   numberFloor = Math.floor(number + 1);

//   document.write(numberFloor + "<br>");
// }

//trunc, le quita los decimales
let numb = 9.2;

let result1 = Math.trunc(numb);

document.write(result1);
