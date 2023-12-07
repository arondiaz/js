//funciones que retornan una funcion

const obtenerCliente = () => () => console.log("Pepe");

const funcion = obtenerCliente();

funcion();
