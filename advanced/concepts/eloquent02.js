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

// function min(a, b) {
//   let result = Math.min(a, b);
//   console.log(`El minimo es ${result}`);
// }

// min(-93, -6);

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(-1));

// function contarBs(string) {
//   for (let i = 0; i < string.length -1; i++) {
//     let count = 1 + i;
//     console.log(count);
//   }
// }

// contarBs("pepe");

