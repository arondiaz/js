//Implicit binding
//de manera implicita hago referencia al dato.

const usuario = {
  nombre: "Jorge",
  edad: 32,
  informacion() {
    console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad}`);
  },
  mascota: {
    nombre: "Est",
    edad: 1,
    informacion() {
      console.log(
        `Mi nombre es ${this.nombre} y mi edad ${this.edad} mi dueño es ${usuario.nombre}`
      );
    },
  },
};

usuario.informacion();
usuario.mascota.informacion();
