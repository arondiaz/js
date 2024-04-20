//Encadenamiento opcional
// https://www.youtube.com/watch?v=sNlY4B6VgZE

const usuario = {
  nombre: "Pepe",
  edad: 23,
  // rol: {
  //     backend: "go",
  //     frontend: "angular"
  // }
  saludar() {
    return "Hola!";
  },
};

//Error
// console.log(usuario.rol.backend);

//Undefined
console.log(usuario.rol?.backend);

//Anterior al 2020 se hacia de esta forma la comprobación
const resultado = usuario.rol ? usuario.rol.backend : undefined;

console.log(resultado);
