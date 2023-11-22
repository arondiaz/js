function Client(name, account) {
  this.name = name;
  this.account = account;
}

Client.prototype.typeClient = function () {
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
  return `Name ${this.name}, account ${
    this.account
  }, type client ${this.typeClient()} !!`;
};

Client.prototype.withdraw = function (value) {
  this.account -= value;
};

function People(name, account, phone) {
  //Heredar propiedades
  Client.call(this, name, account);
  this.phone = phone;
}

//Heredar metodos/funciones
People.prototype = Object.create(Client.prototype);
People.prototype.constructor = Client;

const josh = new People("Josh", 7800, 3897979997);
console.log(josh);
console.log(josh.infoClient());


People.prototype.showNumber = function() {
    return `The phone number is ${this.phone}`
    
}
console.log(josh.showNumber());