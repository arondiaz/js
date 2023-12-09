//SELF
//se refiere a la ventana global como window, pero es usado en un service worker donde window no existe y es reemplazado por self-

const result = window === self;
//true
console.log(result);

window.onload = () => {
  console.log("ventana cargada");
};

self.onload = () => {
  console.log("ventana cargada");
};
