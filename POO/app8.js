// POO

// Clase: Es una plantilla para crear objetos, en dónde se define sus propiedades y métodos.
// Objeto: Son los resultados de estas clases.
// Atributo/ propiedades: Son variables de un objeto, sus características. Por ejemplo: "especie", "edad", "color"
// Metodos: Lo que puede hacer el objeto, son funciones.
// Constructor: Al crear una clase hay que crear un constructor para crear las propiedades del objecto
// Instancia: La instanciación es el proceso de crear un objeto a partir de una clase. Esto se hace utilizando el operador "new".

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

const dog = new Animal("shihztu", 3, "white");
console.log(dog);

console.log(dog.color);
console.log(dog.info);

const cat = new Animal("ciames", 4, "orange");
const turtle = new Animal("ninja", 34, "stone");

turtle.verInfo();
cat.verInfo();
dog.verInfo();
