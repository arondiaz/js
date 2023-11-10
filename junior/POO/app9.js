//POO 2
//
// Abstracción: Al crear un objeto reducimos todo a sus componentes básicos, lo hacemos lo menos complejo posible. Por ejemplo: Un Auto. Al decir esto omitimos muchas características del objeto como puede ser su color, motor, marca, modelo, etc. Lo mismo con los metodos.
//La abstracción es el proceso de simplificar la complejidad de un objeto al mostrar solo los aspectos relevantes y ocultar los detalles innecesarios.

// Modularidad: Separar por partes los problemas.

// Encapsulamiento: Es la forma en la que se ocultan los detalles internos de un objeto. El acceso se controla por medio de "public", "private" y "protected"

//Polimorfismo: Es la capacidad que tiene un objeto de comportarse diferente por sus propiedades. Un Ferrari no va a acelerar de la misma manera que una ranger.

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

  //No estamos siendo abstracto al crear éste método, ya que no todos los animales ladran.
  ladrar() {
    if (this.especie == "shihtzu") {
      document.write("¡Waw!  <br>");
    } else {
      document.write(`No puede ladrar porque es un ${this.especie} <br>`);
    }
  }
}

const dog = new Animal("shihtzu", 3, "blanco");
const cat = new Animal("siames", 4, "naranja");
const dragon = new Animal("komodo", 10, "piedra");

//Polimorfismo
dog.ladrar();
cat.ladrar();
dragon.ladrar();
