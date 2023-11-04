// Bucles

let number = 0;

//while & do while son bucles indeterminados, ya que no definimos la cantidad de veces a ejecutarse.

// while (number < 5) {
//   number++;
//   console.log(number);
// }

// do {
//   number++;
//   console.log(number);
// } while (number < 5);

// while (number < 100) {
//   if (number != 50) {
//     number++;
//     console.log(number);
//   }
// }

// while (number < 100) {
//   number++;
//   console.log(number);
//   if (number == 30) {
//     break;
//   }
// }

//for
// declaracion e inicializacion
// condicion
// aumento/ decremento

// let array = ["React", "Svelte", "Angular", "Vue", "Astro"]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// for (let i = 0; i <= 12; i++) {
//     if(i == 10){
//         continue
//     }
//     console.log(i);

// }

let animals = ["dog", "cat", "dragon"];

//for in - indice
for (animal in animals) {
  console.log(animal);
}



// for in - nombre
for (animal in animals) {
  console.log(animals[animal]);
}



// for of - nombre
for (animal of animals) {
  console.log(animal);
}



let mens = ["Pepe", "Pipo", "Arón"];
let womens = ["Angeline", "Lila", mens];

for (const index1 in womens) {
  if (index1 == 2) {
    for (let menNames of mens) {
      document.write(menNames + "<br>");
    }
  } else {
    document.write(womens[index1] + "<br>");
  }
}
