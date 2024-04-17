let userNumber = Number(prompt("Ingrese un numero"));

if (!Number.isNaN(userNumber)) {
  console.log(userNumber * userNumber);
} else {
  console.log("Debes ingresar un numero");
}

//Sino es un numero devuelve true
console.log(isNaN("dsk"))

//Si es un numero devuelve false
console.log(isNaN(4))

//NaN
console.log(Number("hi"));

//Convierte el 4 string a tipo numero
console.log(Number("4"));

//Convierte el string a numero y verifica que sea numero porque esta !
console.log(!Number.isNaN("4"));




