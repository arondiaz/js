class Calculadora {
  // constructor(potencia, raiz, raizCuadrada){

  // this.potencia = potencia
  // this.raiz = raiz
  // this.raizCuadrada = raizCuadrada
  // }

  //metodos

  calcularRaiz(num) {
    return Math.sqrt(num);
  }

  calcularRaizCubica(num) {
    return Math.cbrt(num);
  }

  calcularPotencia(num, num2) {
    return num ** num2;
  }

  suma = (num, num2) => {
    return parseInt(num) + parseInt(num2);
  };

  resta = (num, num2) => {
    return parseInt(num) - parseInt(num2);
  };

  division = (num, num2) => {
    return parseInt(num) / parseInt(num2);
  };

  multiplicacion = (num, num2) => {
    return parseInt(num) * parseInt(num2);
  };
}

const calculator = new Calculadora();

let operacion = parseInt(
  prompt(
    "1: suma, 2: resta, 3: multiplicación, 4: división, 5: potencia, 6: raíz, 7: raíz cúbica "
  )
);

if (operacion >= 1 && operacion <= 8) {
  if (operacion == "1") {
    let number = prompt("Numero 1");
    let number2 = prompt("Number 2");

    let result = calculator.suma(number, number2);
    // parseInt(result)
    alert(result);
  }

  if (operacion == "2") {
    let number = prompt("Numero 1");
    let number2 = prompt("Number 2");

    let result = calculator.resta(number, number2);
    // parseInt(result)
    alert(result);
  }

  if (operacion == "3") {
    let number = prompt("Numero 1");
    let number2 = prompt("Number 2");

    let result = calculator.multiplicacion(number, number2);
    // parseInt(result)
    alert(result);
  }

  if (operacion == "4") {
    let number = prompt("Numero 1");
    let number2 = prompt("Number 2");

    let result = calculator.division(number, number2);
    // parseInt(result)
    alert(result);
  }

  if (operacion == "5") {
    let number = prompt("Numero 1");
    let number2 = prompt("Number 2");

    let result = calculator.calcularPotencia(number, number2);
    // parseInt(result)
    alert(result);
  }

  if (operacion == "6") {
    let number = prompt("Numero 1");
    let result = calculator.calcularRaiz(number);
    // parseInt(result)
    alert(result);
  }

  if (operacion == "7") {
    let number = prompt("Numero 1");
    let result = calculator.calcularRaizCubica(number);
    // parseInt(result)
    alert(result);
  }
}
