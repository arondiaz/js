//Funciones como argumento

const suma = function (a, b) {
  return a + b;
};

const multiplicar = function (a, b) {
  return a * b;
};

const sumarOmultiplicar = function (fn) {
  return fn(5, 3);
};
console.log(sumarOmultiplicar(suma));
console.log(sumarOmultiplicar(multiplicar));
