//Class Patern

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const persona = new Persona("Pepe", "pepemail@gmail.com");

console.log(persona);
