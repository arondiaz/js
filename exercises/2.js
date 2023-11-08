// dado el siguiente array diferencia cuales son vocales y cuales son consonantes

// let letters = "BASOASJWJSEUIOP"
// let vocals = []
// let consonants = []

// for(let i = 0; i < letters.length; i++){
//     if(letters[i] == "A" || letters[i] == "E" || letters[i] == "I" || letters[i] == "O" ||  letters[i] == "U"){
//         vocals.push(letters[i])
//     }else{
//         consonants.push(letters[i])
//     }
// }

// console.log(`Seperar en vocales y consonantes ${letters}`);
// console.log(`Las vocales son: ${vocals}`);
// console.log(`Las consonantes son: ${consonants}`);

// let verduras = [];
// let carne = [];

// let encuesta = true;

// while (encuesta) {
//   encuesta = true;
//   let user = prompt("Numero 1: verduras, Numero 2: carne, Numero 3: salir");
//   if (user == "3") {
//     encuesta = false;
//   } else if (user == "1") {
//     let verduraUser = prompt("Ingrese la verdura");
//     if (verduraUser !== verduras) {
//       verduras.push(verduraUser);
//     }
//   } else if (user === "2") {
//     let carneUser = prompt("Ingrese la carne");
//     if (carneUser !== carne) {
//       carne.push(carneUser);
//     }
//   }
// }

// let resultFinal = verduras.join(" ")
// let resultFin = carne.join(" ")
// document.write(` <h3>VERDURAS:</h3> <h4> ${resultFinal}</h3> <br>`);
// document.write( `<h3>CARNE:</h3> <h4>${resultFin}</h4>`);

let frutas = ["banana", "manzana", "frutilla"];
let verduras = ["repollo", "lechuga", "tomate", "zanahoria"];

let user = prompt("Ingrese");

if (frutas.includes(user)) {
  alert("Es una fruta");
} else if (verduras.includes(user)) {
  alert("Es una verdura");
} else {
  alert("No encontrada en la base de datos");
  let select = prompt("Si es una fruta aprieta 1, caso contrario 2");
  if (select == 1) {
    let newFruta = prompt(`Ingrese la nueva fruta`);
    frutas.push(newFruta);
  } else if (select == 2) {
    let newVerdura = prompt(`Ingrese la nueva verdura`);
    verduras.push(newVerdura);
  }
  document.write(`FRUTAS ${frutas} <br>`);
  document.write(`VERDURAS ${verduras} <br>`);
}
