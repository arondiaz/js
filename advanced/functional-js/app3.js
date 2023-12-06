const carrito = [
  { nombre: "Mouse", precio: 19.99 },
  { nombre: "Teclado", precio: 29.99 },
  { nombre: "Pad", precio: 9.99 },
  { nombre: "Monitor", precio: 219.99 },
  { nombre: "Auricular", precio: 3129.99 },
  { nombre: "Silla", precio: 549.99 },
];

const result = carrito.filter((producto) => {
  return producto.precio > 400;
});

console.log(result);

//Higher order function
const mayor400 = (producto) => {
  return producto.precio > 400;
};

const resultado = carrito.filter(mayor400);
console.log(result);
