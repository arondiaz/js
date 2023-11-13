//el constructor se ejecuta cada vez que se crea una nueva instancia de persona.
class Persona {
  //"use strict", por defecto las clases usan el modo estricto.

  //inicializando propiedades de clases
  nombre = "";
  apellido = "";

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

const persona1 = new Persona("Pepe", "Juarez");
console.log(persona1);
