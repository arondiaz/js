//Singleton
// miracle labs - pdf
// Permite tener una única instancia global a toda nuestra aplicación
// ▶ Singletons son clases que se pueden instanciar una vez y se puede acceder a ellas
// globalmente.
// ▶ Esta instancia única se puede compartir en toda nuestra aplicación, lo que hace
// que Singletons sea excelente para administrar el estado global en una aplicación.
// repasar pdf, "una forma de crear solo una instancia es creando un campo instance (static instance)"

let instancia = null;

class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    } else {
      return instancia;
    }
  }
}

const people1 = new Persona("Percy", "pe@gmail.com");
console.log(people1);

//error
const people2 = new Persona("Troy", "troy@gmail.com");
console.log(people2);


//Otro ejemplo
/// -- -- -- Ejemplo del pdf de miracle labs
// una forma de crear solo una instancia es creando un campo instance (static instance)
class Cliente {
  static instance;
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
    if (Cliente.instance) {
      throw new Error("Sólo puedes crear una instancia");
    }
    Cliente.instance = this;
  }
}

const people3 = new Cliente();
console.log(people3);
//Error
const people4 = new Cliente();
console.log(people4);
