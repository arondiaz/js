//Modelo de concurrencia y loop de eventos - Event LOOP
//https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop
//https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=119s

//JS es de un solo hilo, se ejecuta una cosa a la vez, eso es el loop de eventos. Hay eventos que tienen más prioridad que otros.

//1 primero console.log
//2 funciones
//3 promesas
//4 timmeout
console.log("primero");

//5
setTimeout(() => {
  console.log("segundo");
}, 0);

//2
console.log("tercero");

//6
setTimeout(() => {
  console.log("cuarto");
}, 0);

//4
new Promise(function (resolve) {
  resolve("Desconocido");
}).then(console.log());

//3
console.log("ultimo");
