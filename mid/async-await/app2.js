function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("El listado se descargo correctamente");
      }
      else{
      reject("Error de conexión");
    }}, 4000);
  });
}

async function ejecutar() {
  try {
    console.log("antes de await");
    const response = await descargarClientes();
    console.log("despues de await");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
ejecutar();
