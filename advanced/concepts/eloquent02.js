//Clausura

// function exterior() {
//     let mensaje = 'Hola';

//     function interior() {
//       console.log(mensaje);
//     }

//     return interior;
//   }

//   let miFuncion = exterior();
//   miFuncion();

//   function wrapValue(n) {
//     let local = n;
//     return () => local;
//   }

//   let wrap1 = wrapValue(1);
//   let wrap2 = wrapValue(2);
//   console.log(wrap1());
//   // → 1
//   console.log(wrap2());
//   // → 2

// function encontrarSolucion(objetivo) {
//     function encontrar(actual, historial) {
//       if (actual === objetivo) {
//         return historial;
//       } else if (actual > objetivo) {
//         return null;
//       } else {
//         return encontrar(actual + 5, `(${historial} + 5)`) ??
//                encontrar(actual * 3, `(${historial} * 3)`);
//       }
//     }
//     return encontrar(1, "1");
//   }

//   console.log(encontrarSolucion(16));
//   // → (((1 * 3) + 5) * 3)

// function imprimirInventario(vacas, pollos) {
//   let cadenaVaca = String(vacas);

//   while (cadenaVaca.length < 3) {
//     cadenaVaca = "0" + cadenaVaca;
//   }
//   console.log(cadenaVaca);

//   let cadenaPollos = String(pollos);

//   while (cadenaPollos.length < 3) {
//     cadenaPollos = "0" + cadenaPollos;
//   }
//   console.log(cadenaPollos);
// }

// imprimirInventario(2, 5);

/************************************ */
// Mínimo
// El capítulo previo presentó la función estándar Math.min que devuelve su menor argumento. Ahora podemos escribir una función como esa nosotros mismos. Define la función min que toma dos argumentos y devuelve su mínimo
// function min(a, b) {
//   let result = Math.min(a, b);
//   console.log(`El minimo es ${result}`);
// }

// min(-93, -6);

/************************************************** */

/*Recursión
Hemos visto que podemos usar % (el operador de resto) para verificar si un número es par o impar al usar % 2 para ver si es divisible por dos. Aquí hay otra forma de definir si un número entero positivo es par o impar:

El cero es par.

El uno es impar.

Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva isEven que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero positivo) y devolver un booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. ¿Por qué? ¿Puedes pensar en una forma de solucionarlo?

 */

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(-1));

/*********************************** */

/*Contando frijoles
Puedes obtener el *ésimo carácter, o letra, de una cadena escribiendo [N] después de la cadena (por ejemplo, cadena[2]). El valor resultante será una cadena que contiene solo un carácter (por ejemplo, "b"). El primer carácter tiene la posición 0, lo que hace que el último se encuentre en la posición cadena.length - 1. En otras palabras, una cadena de dos caracteres tiene longitud 2, y sus caracteres tienen posiciones 0 y 1.

Escribe una función contarBs que tome una cadena como único argumento y devuelva un número que indique cuántos caracteres B en mayúscula hay en la cadena.

A continuación, escribe una función llamada contarCaracter que se comporte como contarBs, excepto que toma un segundo argumento que indica el carácter que se va a contar (en lugar de contar solo caracteres B en mayúscula). Reescribe contarBs para hacer uso de esta nueva función. */

// function contarBs(string) {
//   for (let i = 0; i < string.length -1; i++) {
//     let count = 1 + i;
//     console.log(count);
//   }
// }

// contarBs("pepe");
