// Escribe, en el lenguaje de programación que desees, un programa que muestre en pantalla los números del 1 al 100,
//sustituyendo los múltiplos de 3 por la palabra “Fizz” y, a su vez, los múltiplos de 5 por “Buzz”.
//Para los números que al tiempo son múltiplos de 3 y 5 (como 15), utiliza el combinado “FizzBuzz”.

for (let index = 1; index <= 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log(`${index} Fizz BUzz`);
  } else if (index % 3 == 0) {
    console.log(`${index} Fizz`);
  } else {
    console.log(`${index} Buzz`);
  }
}
