//Explicit Binding

function persona(element1, element2) {
  console.log(
    `Mi nombre es ${this.nombre} y escucho ${element1} y ${element2}`
  );
}

const informacion = {
  nombre: "Powell",
};

const music = ["Rock", "Pop"];

//Al usar call, debo pasarle cada elemento de manera individual
persona.call(informacion, music[0], music[1]);
persona.call(informacion, ...music);

//Con Apply puede tomar el array completo
persona.apply(informacion, music);

//Bind es como call pero hay que crear una funcion y llamarla.
const newFunction = persona.bind(informacion, music[0], music[1]);
newFunction();
