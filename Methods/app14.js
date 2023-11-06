//Metodos array

//METODOS TRANSFORMADORES

let frameworks = ["React", "Angular", "Vue", "Astro"];

//pop, elimina el ultimo elemento del array y te lo muestra.
let result = frameworks.pop();

document.write(result + "<br>");
document.write(frameworks + "<br>");




let lenguages = ["JavaScript", "PHP", "Python", "Java"];

//shift, elimina el primer elemento del array y te lo muestra.
let result2 = lenguages.shift();

document.write(result2 + "<br>");
document.write(lenguages + "<br>");





let citys = ["San Luis", "Buenos Aires", "Rosario", "Cordoba"];

//push, agrega un elemento al final de la lista y devuelve la posicion empezando desde el 1
let result3 = citys.push("Salta");

document.write(result3 + "<br>");
document.write(citys + "<br>");


//reverse, revierte el array

let result4 = citys.reverse()

document.write(result4 + "<br>");


//unshift, agrega al principio del array los elementos que querramos lo modifica y devuelve la cantidad de elementos dentro del array

let numbers = [4,5,6,7,8]


let result5 = numbers.unshift(0,1,2,3)

document.write(result5 + "<br>")
document.write(numbers + "<br>") 


//sort, ordena de menor a mayor u orden alfabetico

let ordena = ["Zorro", "Leon", "Abeja"]

let result6 = ordena.sort()

document.write(result6 + "<br>")


//splice, reemplaza por las posiciones lo que le indiquemos, en caso de no indicarle nada elimina segun las posiciones indicadas 

let characters = ["Homero", "Rick", "Maggie", "Marge"]

characters.splice(1, 2, "Bart", "Lenny", "Moe")

document.write(characters)


//join, 