const suma = (num, num2) => {
  return parseInt(num) + parseInt(num2);
};

const resta = (num, num2) => {
  return parseInt(num) - parseInt(num2);
};

const division = (num, num2) => {
  return parseInt(num) / parseInt(num2);
};

const multiplicacion = (num, num2) => {
  return parseInt(num) * parseInt(num2);
};

let bucle = true;

while (bucle) {
  let operacion = parseInt(
    prompt("1: suma, 2: resta, 3: multiplicacion, 4: divison, 5: salir")
  );

  if (operacion == "5") {
    bucle = false;
    break;
  } else if (operacion >= 1 && operacion <= 4) {
    if (operacion == "1") {
      let number = prompt("Numero 1");
      let number2 = prompt("Number 2");

      let result = suma(number, number2);
      // parseInt(result)
      alert(result);
    }

    if (operacion == "2") {
      let number = prompt("Numero 1");
      let number2 = prompt("Number 2");

      let result = resta(number, number2);
      // parseInt(result)
      alert(result);
    }

    if (operacion == "3") {
      let number = prompt("Numero 1");
      let number2 = prompt("Number 2");

      let result = multiplicacion(number, number2);
      // parseInt(result)
      alert(result);
    }

    if (operacion == "4") {
      let number = prompt("Numero 1");
      let number2 = prompt("Number 2");

      let result = division(number, number2);
      // parseInt(result)
      alert(result);
    }
  }
}
