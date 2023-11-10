//POO
//static: el metodo que tenga static se ejecuta antes de crear el objeto
// get / getter: Obtener informacion
// set / setter: Asigna un valor a una propiedad estática de una clase.

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
      this.raza = null;
    }
    //Metodo
    //static ejecuta el metodo, antes de crear el objeto
    static Ladrar(){
      console.log("¡Waw!");
    }

    set setRaza(newName){
        this.raza = newName
    }

    get getRaza(){
        return this.raza;
    }
  }
  
  const cat = new Animal("Garfiled", 10, "Naranja")

  const perrito = new Perro("perrit", 3, "blanco", "Dogo")
  Perro.Ladrar()

  perrito.setRaza = "Doberman"
  console.log(perrito.getRaza);