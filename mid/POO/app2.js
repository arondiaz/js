//declaración de clase
class Client {
  constructor(name, account) {
    this.name = name;
    this.account = account;
  }

  showInfo() {
    return `cliente: ${this.name}, tu saldo es de ${this.account}`;
  }

  static welcome() {
    return `Bienvenido al cajero`;
  }
}

//herencia

class Company extends Client {
  constructor(name, account, phone, category) {
    super(name, account);
    this.phone = phone;
    this.category = category;
  }

  static welcome() {
    return `Bienvenido al cajero de empresas`;
  }
}

const pepe = new Client("Pepe", 400);
const empresa = new Company("AMD", 779798798, 78788, "Tecnologia");
console.log(empresa.showInfo());
console.log(Company.welcome());
