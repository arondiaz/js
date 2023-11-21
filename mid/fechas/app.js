//existe una libreria moment.js para el formateo de las fechas
// https://momentjs.com/



//Fechas son objetos
const today = new Date()

console.log(today);


const aleatoryDate = new Date("4, 5, 2000")

console.log(aleatoryDate);

let año = aleatoryDate
let month = aleatoryDate


año = aleatoryDate.getFullYear()
month = aleatoryDate.getMonth()
// getMinutes() , getHours(), getTime()

// para modificarlo puedes usar //set en cambio de get pero para vaildar fechas no es recomendable esto ya que varía dependiendo de la fecha que tenga el usuario en su pc-

console.log(año);
console.log(month);


