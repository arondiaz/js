//declaración de clase
class Client {
  constructor(name, account) {
    this.name = name;
    this.account = account;
  }

  showInfo(){
    return `cliente: ${this.name}, tu saldo es de ${this.account}`
  }

  static welcome(){
    return `Bienvenido al cajero`
  }
}

const pepe = new Client("Pepe", 400);
console.log(pepe.showInfo());
console.log(pepe);


console.log(Client.welcome());
//static: error
console.log(pepe.welcome());






//expresión de clase
const Client2 = class {
    constructor(name, account){
        this.name = name
        this.account = account
    }


    showInfo(){
        return `cliente: ${this.name}, tu saldo es de ${this.account}`
      }
};

const pipo = new Client2("Pipo", 999);
console.log(pipo);
