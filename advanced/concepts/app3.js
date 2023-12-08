//Coercion
// la coerción se refiere a la conversión automática o implícita de un tipo de dato a otro. Esto puede suceder en situaciones donde se espera un tipo de dato específico, pero se proporciona un tipo diferente.
//Existe la coercion implicita o explicita

const number = 20;
const number2 = "40";

console.log(number + number2); //Implicita

console.log(Number(number2)); //Explicita

console.log(number.toString()); //explicita

const pedido = [1, 2, 3, 4];
console.log(pedido.toString()); //explicita

console.log(JSON.stringify(pedido)); //explicita
