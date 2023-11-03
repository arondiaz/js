let number = 23;
let number2 = "23";

// true - son iguales?
document.write(number == number2);

// false - son estrictamente iguales?
document.write(number === number2);

// false - son distintas?
document.write(number != number2);

// true - son estricantamente distintas?
document.write(number !== number2);

let number3 = 1;
let number4 = 20;

// false - 1 es mayor a 20
console.log(number3 > number4);

// true - 20 es mayor a 1
console.log(number3 < number4);

// true - mayor o igual
console.log(number3 <= number4);

// Operadores Lógicos

// Booleanos
let value = true;
let value2 = false;

let result = value && value2;

let or = value || value2;

let distinto = !value2;

console.log(distinto);
console.log(or);
console.log(result);
