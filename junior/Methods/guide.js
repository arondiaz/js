//Arrays Methods

//map()
// Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

const parejas = numbers.map((x) => [x, x]);
console.log(parejas);

const mascotas = [
  { nombre: "Clifor", edad: 12, tipo: "Perro" },
  { nombre: "Scooby", edad: 10, tipo: "Perro" },
  { nombre: "Laika", edad: 3, tipo: "Perro" },
  { nombre: "Tuti", edad: 24, tipo: "Tortuga" },
];

const edades = mascotas.map((x) => x.edad);
console.log(edades);

//Primera letra en mayúscula.
const clients = ["pepe", "Jose", "aron", "Horacio", "elon"];

const result = clients.map((client) => {
  return client.charAt(0).toUpperCase() + client.slice(1).toLowerCase();
});
console.log(result);

/////////////////////////////////////////////////////////////////////////

//filter()
//Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const filter = numbers2.filter((x) => x <= 5);
console.log(filter);

const onlyDogs = mascotas.filter((x) => x.tipo === "Perro");
console.log(onlyDogs);

/////////////////////////////////////////////////////////////////////////

//reduce()
//se utiliza para reducir un array a un solo valor. Toma una función de reducción como argumento y aplica esa función acumulativa a cada elemento del array, de izquierda a derecha, para producir un único resultado.

const students = [
  {
    name: "Keo",
    lastname: "De",
    age: 20,
    course: "Music",
  },
  {
    name: "Mae",
    lastname: "Pes",
    age: 18,
    course: "Quimic",
  },
  {
    name: "Joe",
    lastname: "Ber",
    age: 24,
    course: "Maths",
  },
  {
    name: "Per",
    lastname: "Ar",
    age: 32,
    course: "Philosophy",
  },
  {
    name: "Sher",
    lastname: "Fed",
    age: 20,
    course: "Maths",
  },
  {
    name: "Mei",
    lastname: "Pa",
    age: 20,
    course: "Music",
  },
];

// let ages = 0;
// for (let i = 0; i < students.length; i++) {
//   ages += students[i].age;

// }
// console.log(ages);

//total es el valor acumulado. student el elemento actual del array.
//En cada iteración, la función de reducción suma la edad del estudiante (student.age) al valor acumulado (total).
const reduce = students.reduce((total, student) => {
  return total + student.age;
}, 0); //El segundo argumento de reduce es el valor inicial del total, que se establece en 0. Esto significa que la primera vez que se llama a la función de reducción, total es 0.
console.log(reduce);



const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce((total, number) => total + number);

console.log(sum);
