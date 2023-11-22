//Object literal
// no puedes crear objetos dinámicos ni reutilizables
const client = {
  name: "Pepe",
  account: 500,
};

console.log(client);
console.log(typeof client); //object



//
function Client(name, account) {
  this.name = name;
  this.account = account;
}


const pepe = new Client("Pepe", 500)

console.log(pepe);
console.log(typeof pepe);// object