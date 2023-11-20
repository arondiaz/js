//Promise,

const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;

  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

//uso del promise:
// en caso de que la promise se resuelva correctamente entra el then() - nombre de la funcion + then() entonces/luego ejecuta la función.
// caso contrario, tenemos acceso al catch.

aplicarDescuento
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Hay 3 valores posibles
//fulfilled - el promise se cumplió
//rejected - el promise no se cumplió
//pending  - no se cumplio y tampoco fue rechazado
