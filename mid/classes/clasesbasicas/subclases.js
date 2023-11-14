//extends herencia
class Persona {
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("método estático-");
  }

  nombre = "";
  apellido = "";
  comida = "";

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}!`);
  }
}


//Heroe hereda las propiedades y metodo de la clase persona.
class Heroe extends Persona {
  heroe = "";

  constructor(nombre, apellido) {
    super(nombre, apellido);
    this.heroe = "Hulk";
  }

  quienSoy() {
    console.log(`${this.nombre} del clan ${this.heroe}`);
    super.quienSoy();
  }
}

const persona1 = new Heroe("Pepe", "Juarez");
persona1.quienSoy();

console.log(persona1);
