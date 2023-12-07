//Partials y currying
//Currying es el proceso de convertir una función que toma múltiples argumentos en una secuencia de funciones que toman un solo argumento.
//Partials  la aplicación parcial se refiere a la técnica de fijar ciertos argumentos de una función y crear una nueva función con menos parámetros que la original.
const suma = (a, b, c) => a + b + c;

const parcial = (a) => (b, c) => suma(a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(4, 3);
console.log(resultado);



//Dividiendolo en 3
const partial = a => b => c=> suma(a,b,c)

const numberA = partial(2)
const numberB = numberA(4)
const result = numberB(4)

console.log(result);
//Simplificado: 
const resultadoParcial = partial(2)(4)(4)
console.log(resultadoParcial);