//Creando un PROTOTYPE
function Client(name, account) {
  this.name = name;
  this.account = account;
}

//En estos casos se debe usar function para declarar funciones. No se debe usar arrow fuction.
//De esta forma con function busca en el objeto actual mientras que el arrow funcion busca en la ventana global.
//En este caso podemos acceder a las propiedas con this ya que usamos function
Client.prototype.typeClient = function () {
//   console.log(this.account);
  if (this.account > 10000) {
    type = "GOLD";
  } else if (this.account > 5000) {
    type = "SILVER";
  } else {
    type = "BRONZE";
  }
  return type;
};

Client.prototype.infoClient = function () {
    return `Name ${this.name}, account ${this.account}, type client ${this.typeClient()} !!`
    
}

Client.prototype.withdraw = function(value){
    this.account -= value
}

const pipo = new Client("Pipo", 6000);
console.log(pipo);
console.log(pipo.typeClient());
console.log(pipo.infoClient());
(pipo.withdraw(1200));
console.log(pipo.infoClient());

function Company(name, account, category) {
  this.name = name;
  this.account = account;
  this.category = category;
}

const meta = new Company("Meta", 100000, "Sofware");
console.log(meta);
