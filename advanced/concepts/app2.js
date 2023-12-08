//Hoisting

/*Llamas a obtenerCliente("Aron") antes de la declaración de la función obtenerCliente. Sin embargo, esto funciona porque las declaraciones de funciones en JavaScript son elevadas (hoisted), lo que significa que la declaración de la función se mueve a la parte superior del ámbito antes de que se ejecute el código. */
obtenerCliente("Aron");
function obtenerCliente(nombre) {
  console.log(`El nombre del cliente es ${nombre}`);
}

//Marca error
/*Luego, intentas llamar a mostrarCliente("Pepe") antes de haber declarado la función mostrarCliente. En este caso, estás utilizando una expresión de función flecha asignada a una variable (mostrarCliente). Las expresiones de funciones no se elevan de la misma manera que las declaraciones de funciones, por lo que cuando intentas llamar a mostrarCliente antes de su declaración, obtendrás un error.*/
mostrarCliente("Pepe");
const mostrarCliente = (nombre) => {
  console.log(`El nombre del cliente es ${nombre}`);
};

//El "hoisting" es un comportamiento donde las declaraciones de variables y funciones son movidas ("elevadas") al principio de su contexto antes de que se ejecute el código. Esto significa que, aunque puedas escribir tu código de una manera, el intérprete de JavaScript reorganizará internamente las declaraciones.

//En el caso de las funciones, esto significa que puedes llamar a una función antes de su declaración en el código, y aún así funcionará, porque la declaración de la función se mueve al principio del ámbito. Veamos un ejemplo:

//Aunque saludar() se llama antes de la declaración de la función, el código funcionará porque la declaración de la función es "elevada" al principio del ámbito.
saludar(); // Esto funcionará

function saludar() {
  console.log("Hola, mundo!");
}

//
/*Aunque saludar() se llama antes de la declaración de la función, el código funcionará porque la declaración de la función es "elevada" al principio del ámbito. */

decirHola(); // Esto generará un error

const decirHola = function () {
  console.log("Hola, mundo!");
};

//En este caso, la variable decirHola es elevada, pero su valor no es una función hasta la línea donde se le asigna la función. Por lo tanto, al intentar llamarla antes de esa asignación, se produce un error.
