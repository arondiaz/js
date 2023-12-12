//Namespace - design pattern
//Sobre este objeto vamos a ir colocando datos y funciones para evitar el choque de nombres en el scope global
const restaurantApp = {};

restaurantApp.platos = [
  {
    plato: "Pizza",
    precio: 25,
  },
  {
    plato: "Hamburguesa",
    precio: 20,
  },
  {
    plato: "Helado",
    precio: 12,
  },
];

restaurantApp.funciones = {
  mostrarMenu: (platos) => {
    console.log(`Bienvenidos a nuestro menú`);
    platos.forEach((plato, index) => {
      console.log(`${index} ${plato.plato} $${plato.precio}`);
    });
  },

  ordenar: (indice) => {
    console.log(
      `Tu platillo ${restaurantApp.platos[indice].plato} se esta preparando`
    );
  },
  agregarPlatillo: (plato, precio) => {
    const nuevo = {
      plato,
      precio,
    };
    restaurantApp.platos.push(nuevo);
  },
};

const { platos } = restaurantApp;

restaurantApp.funciones.mostrarMenu(platos);
restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlatillo("Calamar", 40)