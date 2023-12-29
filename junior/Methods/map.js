//map()
// Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
// El array original no se modifica.

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

const edad = mascotas.map((x) => [x.nombre, x.edad]);
console.log(edad);


const clients = ["pepe", "Jose", "aron", "Horacio", "elon"];
const result = clients.map(client => {
    return client.charAt(0).toUpperCase() + client.slice(1).toLowerCase()
})
console.log(result);