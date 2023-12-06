//En el caso de JavaScript, aunque no es un lenguaje funcional puro, su flexibilidad y dinamismo nos permiten adoptar un enfoque funcional y métodos.

const suma = function (a, b) {
  return a + b;
};

//First class function: se puede asignar una funcion a una variable
const resultado = suma;
console.log(resultado(3, 6));
