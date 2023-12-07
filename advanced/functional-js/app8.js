//closures

//Aveces un valor que esta dentro de una funcion, queremos acceder afuera, eso se llama closures: la forma en la que accedemos a un valor de una funcion desde el exterior
const cliente = "Pepe";

function mostrarCliente() {
  const cliente = "Aron";

  console.log(cliente);
}

mostrarCliente();

///CLOSURES

const obtenerCliente = () => {
  const cliente1 = "Jorge";

  function mostrarCliente() {
    console.log(cliente1);
  }

  return mostrarCliente;
};

const result = obtenerCliente();
result();





