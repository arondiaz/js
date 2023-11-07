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

let result4 = citys.reverse();

document.write(result4 + "<br>");

//unshift, agrega al principio del array los elementos que querramos lo modifica y devuelve la cantidad de elementos dentro del array

let numbers = [4, 5, 6, 7, 8];

let result5 = numbers.unshift(0, 1, 2, 3);

document.write(result5 + "<br>");
document.write(numbers + "<br>");

//sort, ordena de menor a mayor u orden alfabetico

let ordena = ["Zorro", "Leon", "Abeja"];

let result6 = ordena.sort();

document.write(result6 + "<br>");

//splice, reemplaza por las posiciones lo que le indiquemos, en caso de no indicarle nada elimina segun las posiciones indicadas

let characters = ["Homero", "Rick", "Maggie", "Marge"];

characters.splice(1, 2, "Bart", "Lenny", "Moe");

document.write(characters + "<br>");



//Metodos accesores

//join, convierte al array en un formato string con separadores o con lo que se indique.

let words = ["bee", "snake", "lion"];

document.write(words + "<br>");

let result7 = words.join(" - ");

document.write(result7 + "<br>");
console.log(typeof words);
console.log(typeof result7);

//slice, deja los elementos que le indiquemos desde/hasta.

let brands = ["Intel", "AMD", "ASUS", "MSI"];

let result8 = brands.slice(0, 3);

//todos menos el ultimo
let result9 = brands.slice(0, -1);

document.write(result8 + "<br>");



//includes, incluye la palabra...? true or false

let result10 = brands.includes("ASUS")
document.write(result10 + "<br>")


//indexOf, devuelve el índice, la ubicacion del elemento entero
let result11 = brands.indexOf("ASUS")
document.write(result11  + "<br>")



///De repetición

//filter, crea un nuevo array con la condicion que se le indique.

brands.filter((brand) => {
    document.write(brand + "<br>")
    // console.log(brands);
})

let result12 = brands.filter(brand => brand.length > 3)

document.write(result12 + "<br>")
console.log(result12);


//forEach, se utiliza para iterar a través de los elementos de un array y ejecutar una función proporcionada en cada elemento sin modificar el array original.

let number = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
document.write(number);
});


//La diferencia principal es que forEach se utiliza para iterar sobre un array y realizar una operación en cada elemento, pero no crea un nuevo array.
//Mientras que filter se utiliza para crear un nuevo array que contiene solo los elementos que cumplen una condición dada.
// si deseas realizar una acción en cada elemento del array, utiliza forEach; si necesitas crear un nuevo array con elementos filtrados según una condición, utiliza filter.