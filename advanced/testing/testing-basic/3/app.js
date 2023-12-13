//Funcionamiento básico de bibliotecas de testing como jest.
function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

async function sumaAsync(a, b) {
  return Promise.resolve(suma(a, b));
}

let result = suma(2, 2);
let esperado = 4;

expected(esperado).toBe(result);

result = restar(3, 4);
esperado = 2;

expected(esperado).toBe(result);

expected(esperado).toEqual(result);

console.log("=======================");
test("Suma 10 + 20 y el resultado debe ser 30", async () => {
  const result = await sumaAsync(10, 20);
  const esperado = 30;
  expected(esperado).toBe(result);
});

async function test(mensaje, callback) {
  try {
    await callback();
    console.log(`El test: ${mensaje} se ejecutó correctamente`);
  } catch (error) {
    console.log("Error");
    console.log(error);
  }
}

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
