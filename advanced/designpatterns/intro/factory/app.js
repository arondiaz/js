//Factory
/* Permite definir un método estándar para crear un objeto
▶ Con el patrón Factory podemos usar funciones para ”fabricar” o crear nuevos
objetos

La función de fábrica puede ser útil si estamos creando objetos relativamente
complejos y configurables
▶ Podría suceder que los valores de las claves y los valores dependan de un
determinado entorno o configuración
▶ Con la función fábrica podemos crear fácilmente nuevos objetos que contengan
claves y valores personalizados*/

class InputHTML {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }

  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}"`;
  }
}

class HTMLFactory {
  crearElemento(tipo, nombre) {
    switch (tipo) {
      case "text":
        return new InputHTML("text", nombre);
      case "tel":
        return new InputHTML("tel", nombre);
      case "email":
        return new InputHTML("email", nombre);
      default:
        return;
    }
  }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento("text", "nombre-cliente");
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento("tel", "tel-cliente");
console.log(inputText2.crearInput());

const element3 = new HTMLFactory();
const inputText3 = element3.crearElemento("tel", "tel-cliente");
console.log(inputText3.crearInput());
