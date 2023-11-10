class Celular {
  constructor(color, peso, resolucion, camara, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucion = resolucion;
    this.camara = camara;
    this.ram = ram;
  }

  encendido = true;

  boton() {
    if (this.encendido == true) {
      this.encendido = false;
      console.log("Apagando");
    } else {
      this.encendido = true;
      console.log("Prendiendo");
    }
  }

  reiniciar() {
    if (this.encendido == true) {
      console.log("Reiniciando");
    }
  }

  tomarFotos() {
    console.log(`Sacando fotos con ${this.camara}`);
  }

  grabar() {
    console.log(`Sacando fotos con ${this.resolucion}`);
  }

  info() {
    return `El celular ${this.color}, pesa ${this.peso}gr, tiene una resolucion de ${this.resolucion}, camara de ${this.camara}px y tiene ${this.ram} de memoria ram`;
  }
}

// const Iphones = new Celular("Rojo", 200, 1080, 12, 4);
// const Samsungs = new Celular("Negro", 220, 2140, 48, 8);
// const Motorolas = new Celular("Gris", 190, 1080, 12, 6);

// console.log(Iphones.info());

class Apple extends Celular {
  constructor(color, peso, resolucion, camara, ram, faceid) {
    super(color, peso, resolucion, camara, ram);

    this.reconocimientoFacial = faceid;
  }

  reconocimientoFacial(){
    console.log(`Desbloqueando celular por reconocimiento facial`);
  }

  iphoneInfo() {

    return `${this.info()}  ${this.reconocimientoFacial}`;
  }
}

const IPhone15 = new Apple("rojo", 200, 1080, 48, 6, "FaceID X");
const IPhone13 = new Apple("verde", 180, 1080, 12, 4, "FaceID")

document.write(`${IPhone15.iphoneInfo()} <br> ${IPhone13.iphoneInfo()}`)


