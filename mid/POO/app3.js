//declaración de clase
class Client {
  //el # hace que la propiedad sea privada y accesible por los metodos
  #name;
  constructor(name, account) {
    this.#name = name;
    this.account = account;
  }

  showInfo() {
    return `cliente: ${this.#name}, tu saldo es de ${this.account}`;
  }

  static welcome() {
    return `Bienvenido al cajero`;
  }
}

const pepe = new Client("Pepe", 740);

console.log(pepe.showInfo());
