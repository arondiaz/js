/*La suma de un rango
La introducción de este libro insinuó lo siguiente como una forma agradable de calcular la suma de un rango de números:

console.log(sum(range(1, 10)));
Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array que contenga todos los números desde inicio hasta fin, incluyendo fin.

Luego, escribe una función sum que tome un array de números y devuelva la suma de estos números. Ejecuta el programa de ejemplo y verifica si realmente devuelve 55.

Como asignación adicional, modifica tu función range para que tome un tercer argumento opcional que indique el valor de “paso” utilizado al construir el array. Si no se proporciona un paso, los elementos deberían aumentar en incrementos de uno, correspondiendo al comportamiento anterior. La llamada a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. Asegúrate de que esto también funcione con valores de paso negativos, de modo que range(5, 2, -1) produzca [5, 4, 3, 2]. */

// function range(inicio, fin) {
//   let resultado = [];
//   for (let index = inicio; index <= fin; index++) {
//     resultado.push(index);
//   }
//   return resultado;
// }

// console.log(range(2, 6));

// function sum(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/************************************************** */
///

/*Mínimo
El capítulo previo presentó la función estándar Math.min que devuelve su menor argumento. Ahora podemos escribir una función como esa nosotros mismos. Define la función min que toma dos argumentos y devuelve su mínimo. */

// function searchMin(num, num2) {
//   if (num > num2) {
//     return num + " Es mayor";
//   } else if (num2 > num) {
//     return num2 + " Es mayor";
//   } else {
//     return "Son iguales";
//   }
// }

// console.log(searchMin(15, 15));
