//Mixin Pattern
//https://www.youtube.com/watch?v=QWVuubrms18
class Vehiculo {
  constructor(modelo, marca) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

const funcionesAutos = {
  mostrarInformacion() {
    console.log(`marca ${this.marca}, modelo ${this.modelo}`);
  },

  mostrarMarca() {
    console.log(`marca ${this.marca}`);
  },
};

//Añadir funcionesAutos a la clase Vehiculo
Object.assign(Vehiculo.prototype, funcionesAutos);

const auto = new Vehiculo("Ranger", "Ford");
console.log(auto);

auto.mostrarMarca();
