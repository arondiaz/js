function descargarUsuarios() {
  return new Promise((resolve) => {
    console.log("descargando clientes");

    setTimeout(() => {
      resolve("Los usuarios fueron descargados");
    }, 5000);
  });
}

function descargarPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
  });
}

const app = async () => {
  try {
    const respuesta = await Promise.all([descargarUsuarios(),descargarPedidos()]);
    console.log(respuesta);
    // const clientes = await descargarUsuarios();
    // console.log(clientes);

    // const pedidos = await descargarPedidos()
    // console.log(pedidos);
  } catch (error) {
    console.log(error);
  }
};

app();
