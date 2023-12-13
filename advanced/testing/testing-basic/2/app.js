//Funcionamiento básico de bibliotecas de testing como jest.
function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

let result = suma(2, 2);
let esperado = 4;

expected(esperado).toBe(result);

result = restar(3, 4);
esperado = 2;

expected(esperado).toBe(result);

expected(esperado).toEqual(result);

function expected(esperado) {
  return {
    toBe(result) {
      if (result !== esperado) {
        console.log(
          `El resultado ${result} es diferente a lo esperado; no pasó la prueba`
        );
      } else {
        console.log("La prueba paso correctamente");
      }
    },
    toEqual(result) {
      if (result !== esperado) {
        console.log(
          `El resultado ${result} es diferente a lo esperado; no pasó la prueba`
        );
      } else {
        console.log("La prueba paso correctamente");
      }
    },
  };
}
