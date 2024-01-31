//filter()
//Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

const mascotas = [
  { nombre: "Clifor", edad: 12, tipo: "Perro" },
  { nombre: "Scooby", edad: 10, tipo: "Perro" },
  { nombre: "Laika", edad: 3, tipo: "Perro" },
  { nombre: "Tuti", edad: 24, tipo: "Tortuga" },
];

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const filter = numbers2.filter((x) => x <= 5);
console.log(filter);

const onlyDogs = mascotas.filter((x) => x.tipo === "Perro");
console.log(onlyDogs);

///////////////////////////////////////////

const cars = [
  { model: "Falcon", hp: 340, type: "Car" },
  { model: "Hilux", hp: 200, type: "Pickup" },
  { model: "Clio", hp: 90, type: "Car" },
  { model: "Dax", hp: 5, type: "Motocycle" },
];

const moreHp = cars.filter((car) => car.hp >= 200);

console.log(moreHp);

/////////////////////////////////////////


const ages = [21, 42, 22, 12, 15];

const isAdult = ages.filter((age) => age >= 18);

console.log(isAdult);
