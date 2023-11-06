//Metodos de cadena

let cadena = "No pares hasta lograrlo";

let cadenaNumber = 2324


//concat
let resultado = cadena.concat(" hi")

//startsWith, devuelve true or false si cadena empieza con la palabra no
let resultado2 = cadena.startsWith("No")

//endswith
let resultado3 = cadena.endsWith("lograrlo")

//includes
let resultado4 = cadena.includes("pares")

//indexof, devuelve el indice de la primer letra que se le pase.
let resultado5 = cadena.indexOf("pares")

//padStart, el numero que le indicamos es el numero final de caracteres que tendrá la variable y se rellena con lo que le indiquemos (al principio)
let resultado6 = cadena.padStart(40, "daleeee")

//padEnds,  el numero que le indicamos es el numero final de caracteres que tendrá la variable y se rellena con lo que le indiquemos (al final)
let resultado7 = cadena.padEnd(40, "vamos")

//repeat, repite el numero de veces que le indicamos
let resultado8 = cadena.repeat(3)

//split, separa
let resultado9 = cadena.split("pares")
let result9 = cadena.split(" ")

//substring, recorta desde las posiciones indicadas y lo devuelve
let resultado10 = cadena.substring(0, 8)

//toLowerCase
let resultado11 = cadena.toLowerCase()

//toUpperCase
let resultado12 = cadena.toUpperCase()

//toString
let resultado13 = cadenaNumber.toString()

//trim, recorta los espacios sobrantes
let resultado14 = cadena.trim()

//trimEnd, recorta los espacios del final
//trimStart, recorta los espacios del principio

document.write(resultado + "<br>") 
document.write(resultado2 + "<br>")
document.write(resultado3 + "<br>")
document.write(resultado4 + "<br>")
document.write(resultado5 + "<br>")
document.write(resultado6 + "<br>")
document.write(resultado7 + "<br>")
document.write(resultado8 + "<br>")

document.write(result9[3] + "<br>")
document.write(resultado9 + "<br>")
document.write(resultado10 + "<br>")
document.write(resultado11 + "<br>")
document.write(resultado12 + "<br>")

document.write(resultado13 + "<br>")
console.log(typeof(resultado13));
document.write(resultado14);

