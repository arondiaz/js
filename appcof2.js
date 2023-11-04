let free = false;

const validateClient = (time) => {
  let age = prompt("¿Cuál es tu edad?");
  if (age > 18) {
    if (time >= 2 && time < 7 && !free) {
      console.log("Podes pasar gratis");
      free = true;
    } else {
      console.log("La entrada son $10000");
    }
  } else {
    console.log("Eres menor");
  }
};

validateClient(1)
validateClient(2)
validateClient(5)