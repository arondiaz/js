function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

let result = suma(2, 2);
let esperado = 6;

if (result !== esperado) {
  console.log(
    `El resultado ${result} es diferente a lo esperado; no pasó la prueba`
  );
} else {
  console.log("La prueba paso correctamente");
}

result = restar(3, 1);
esperado = 2;

if (result !== esperado) {
  console.log(
    `El resultado ${result} es diferente a lo esperado; no pasó la prueba`
  );
} else {
  console.log("La prueba paso correctamente");
}
