// console.log(): Muestra información en la consola.
console.log("Hola, mundo!");

// console.error(): Muestra un mensaje de error en la consola.
console.error("Esto es un mensaje de error.");

// console.warn(): Muestra un mensaje de advertencia en la consola.
console.warn("Esta es una advertencia.");

// console.info(): Muestra un mensaje informativo en la consola.
console.info("Información importante aquí.");

//console.table(): Muestra datos en forma de tabla. Útil para visualizar arreglos o objetos.
const personas = [
  { nombre: "Alice", edad: 30 },
  { nombre: "Bob", edad: 25 },
];
console.table(personas);

// console.clear(): Borra el contenido de la consola, dejándola vacía.
// console.clear();

// console.group() y console.groupEnd(): Crea un grupo de mensajes en la consola para organizar la información.
console.group("Grupo A");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();

console.group("Grupo B");
console.log("Mensaje 3");
console.log("Mensaje 4");
console.groupEnd();

//console.count() utiliza para realizar un seguimiento del número de veces que se llama a un cierto mensaje o etiqueta en la consola.:
for (let i = 0; i < 5; i++) {
  console.count("Iteración del bucle");
}


//temporizador
console.time()
console.timeLog();
console.timeEnd()