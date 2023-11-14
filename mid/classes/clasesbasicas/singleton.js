//singleton
// /Un singleton es un concepto de programación en el cual nosotros tratamos de tener una clase que cuando se intente volver a instanciar, 
//verifique si ya se ha creado anteriormente y si no, entonces crea la instancia y si ya habíamos creado una, entonces usa la misma.
class Prueba {
  static instancia; // por defecto es undefined
  nombre = "";

  constructor(nombre = "") {
    console.log(Prueba.instancia);

    /// ¿porque en la condicion del if se usa doble !!? el opuesto de undefined es true y el opuesto de true es false.
    const a = undefined;
    console.log(a); //undefined
    console.log(!a); // true
    console.log(!!a); // false

    if (!!Prueba.instancia) {
      return Prueba.instancia;
    }

    Prueba.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Prueba("IronMan");
const instancia2 = new Prueba("Hulk");
const instancia3 = new Prueba("Spiderman");

//todos devuelven la primer instancia, por el this.
console.log(instancia1);
console.log(instancia2);
console.log(instancia3);