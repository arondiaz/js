//Encadenamiento opcional
// https://www.youtube.com/watch?v=ClUOu_npNWM
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

//Undefined - Funciona para propiedades anidadas, ya que usuario.rol devuelve undefined y usuario.rol.backend devuelve ERROR, en este caso si es necesario usar Optional Chaining (?);
console.log(usuario.rol?.backend);

//Undefined
console.log(usuario.rol);

//Anterior al 2020 se hacia de esta forma la comprobación
const resultado = usuario.rol ? usuario.rol.backend : undefined;

console.log(resultado);
