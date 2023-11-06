// POO 3
//Herencia
//La herencia es un concepto que permite crear nuevas clases basadas en clases existentes. La clase derivada hereda propiedades y métodos de la clase base, lo que facilita la reutilización de código y la extensión de funcionalidades

class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${edad} y soy de color ${this.color}`;
  }

  //Metodo
  verInfo() {
    document.write(this.info + "<br>");
  }
}

//Extends hereda las propiedades y metodos de la clase Animal
class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = raza;
  }
  //Metodo
  Ladrar(){
    console.log("¡Waw!");
  }
}

const dog = new Animal("shihtzu", 3, "blanco");
const cat = new Animal("siames", 4, "naranja");
const dragon = new Animal("komodo", 10, "piedra");

//Creamos un nuevo Perro heredando el metodo creado en la Clase Animal.
const dogRed = new Perro("perro", 6, "negro", "golden")

console.log(dogRed);
console.log(dogRed.Ladrar());
//Error
console.log(dragon.Ladrar());