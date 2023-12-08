//Scope

//La variable cliente tiene un alcance global
const cliente = "Aron";

function mostrarCliente() {
  console.log(cliente);
}

mostrarCliente();

//La variable cliente tiene el alcance dentro de la funcion{}
function showClient() {
  const client = "Pepe";
}

showClient();
