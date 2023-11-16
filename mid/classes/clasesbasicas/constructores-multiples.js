class Test {
    
  static porObjeto({ nombre, apellido, pais }) {
    return new Test(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info: ${this.nombre} ${this.apellido} ${this.pais}`);
  }
}

const name1 = "Pipo";
apellido1 = "JJ";
pais1 = "Argentina";


const name2 = {
    nombre: "Neo",
    apellido: "X",
    pais: "Matrix"
}

const persona1 = new Test(name1, apellido1, pais1);

const persona2 = Test.porObjeto(name2)

persona1.getInfo();
persona2.getInfo()
