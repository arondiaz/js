//el constructor se ejecuta cada vez que se crea una nueva instancia de persona.

//proto = prototype, es el adn de la instacia del objeto.
class Persona {
  //"use strict", por defecto las clases usan el modo estricto.


  //propiedades estaticas, se declaran con la palabra reservada static.
  // el nombre de la variable puede ser cualquiera, el guion bajo es para diferenciarla.
  static _conteo = 0
  static get conteo(){
    return Persona._conteo + " instancias"
  }

  static mensaje(){
    //no se puede acceder a las propiedades
    console.log(this.nombre);
    console.log("método estático-");
  }


  //inicializando propiedades de clases
  nombre = "";
  apellido = "";
  comida = "";

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    Persona._conteo++;
  }

  //SET, necesita un parametro. Establece un valor.
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  //GET, obtiene un valor. Recomendable usar un return.
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  //Metodo, son funciones dentro de la clase.
  quienSoy() {
    console.log(`Soy ${this.nombre}!`);
  }
}

const persona1 = new Persona("Pepe", "Juarez");
const persona2 = new Persona("Mike", "T");

//al ser un metodo se llama como una funcion ()
persona1.quienSoy();
persona2.quienSoy();

//al ser una propiedad se iguala =
persona1.setComidaFavorita = "Wok de vegetales";
// persona1.comida = "Salmon"
console.log(persona1);
console.log(persona1.getComidaFavorita);


console.log("conteo estatico", Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();