//Constructor Pattern
//Se utiliza una clase base como plano para que otras clases herenden sobre esta.

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email);
    this.empresa = empresa;
  }
}

//instanciando persona, en otros lenguajes tiene la caracteristica de clases abstractas, en donde no se puede instanciar la clase principal pero si heredar. En js no tiene esta restriccion por lo tanto se puede instacinar la clase principal.
const persona1 = new Persona("Pep", "psks@gmail.com");
console.log(persona1);

const cliente = new Cliente("Josh", "js@gmail.com", "IBM");
console.log(cliente);
