//control de flujo

//Sentencia de bloque
let nombre = "JORGE";
{
  let nombre = "PEPE";
  alert(nombre);
}

alert(nombre);

//Sentencia de control de flujo

let number = 10;
let number2 = 12;

if (number > number2) {
  console.log(`${number} es mayor que ${number2}`);
} else {
  console.log(`${number} es menor que ${number2}`);
}

//Sentencia de manejo de exepciones
// try... catch
// si se genera un error en el try, se le pasa por parametro al catch y podemos manejar el error
try {
  probandotrycatch;
} catch (error) {
  console.log(error);
}

// try.. catch + finally
// finally se ejecuta siempre
//independientemente de si se lanzó un error o no. Es útil para realizar acciones de limpieza o liberar recursos, ya que garantiza que ciertas operaciones se realicen, incluso si hay errores.
try {
  // Código que podría lanzar un error
} catch (error) {
  // Manejar el error
  console.error(error);
} finally {
  // Código que siempre se ejecutará, incluso si hay un error
}

// SWITCH

let number3 = 20;

switch (true) {
  case number3 > 5:
    console.log(`${number3} es mayor a 5`);
    break;
  case number3 === 5:
    console.log(`${number3} es igual a 5`);
    break;
  case number3 < 5:
    console.log(`${number3} es menor a 5`);
    break;
  default:
    console.log("Pepe");
    break;
}
