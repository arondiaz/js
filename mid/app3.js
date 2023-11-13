//Eventos

// Los eventos son cosas que suceden en el sistema que estás programando. El sistema se encarga de producir una señal de cierto tipo cuando un evento ocurre, y proporciona un mecanismo para que una acción se lleve a cabo (ejecutar código) de forma automática cuando el evento ocurra. Los eventos se lanzan dentro de la ventana del navegador y usualmente están asociados a un elemento en específico dentro de dicha ventana. Esto puede ser un solo elemento, un grupo de elementos, el documento HTML cargado la pestaña actual, o la ventana del navegador en su totalidad. Existen distintos tipos de eventos que pueden ocurrir.

// Por ejemplo:
// El usuario selecciona, hace clic o pasa el ratón por encima de cierto elemento.
// El usuario presiona una tecla del teclado.
// El usuario redimensiona o cierra la ventana del navegador.
// Una página web terminó de cargarse.
// Un formulario fue enviado.
// Un vídeo se reproduce, se pausa o termina.
// Ocurrió un error.

///
//// ACLARACIÓN
//
// Cuando utilizas addEventListener para agregar un escuchador de eventos, los tres parámetros son los siguientes:
// element.addEventListener(eventType, callback, options);
// eventType: Es una cadena que especifica el tipo de evento que se está escuchando, por ejemplo, "click", "mouseover", etc.
// callback: Es la función que se ejecutará cuando ocurra el evento.
// options: Es un objeto opcional que puede contener propiedades adicionales. Si deseas utilizar la fase de captura, debes establecer el valor de la propiedad capture en true. (EVENT CAPTURING, abajo explicado)

const btnChangeColor = document.querySelector(".btn-bgcolor");

btnChangeColor.addEventListener("click", changeBgColor);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBgColor() {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  const h1 = document.querySelector("H1");
  h1.style.color = randomColor;
}

//
//////Flujo de eventos
////event bubbling
// Por defecto los eventos son de tipo burbujeo "bubbling", los eventos surgen del más específico al menos específico (o desde los hijos hacia los padres).
// aunque el evento del button este abajo del evento del contenedor, primero se ejecuta el button. Eso se lo conoce como event bubbling

const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");

// contenedor.addEventListener("click", (e) => {
//     console.log("click al contenedor")
// })

// button.addEventListener("click", (e) => {
//     console.log("click al boton")
// })

//event capturing
// agregando el true modifica el surgimiento del evento, ahora es desde el menos específico al más específico (o desde los ancestros/padres a hijos)
// true seria el tercer parametro de la funcion para habilitar el evento de captura.
///Si no especificas este tercer parámetro, por defecto se asume que estás interesado en la fase de burbujeo y se establece en false.

contenedor.addEventListener(
  "click",
  (e) => {
    console.log("click al contenedor");
  },
  true
);

button.addEventListener("click", (e) => {
  console.log("click al boton");
});

//e.stopPropagation()
//detiene los eventos

//
///
////Tipos de eventos
///
//
/*Eventos de mouse */
// click
// dblclick
// mouseover
// mouseout
//otros
// contextmenu, click derecho
//

/*Eventos del teclado*/
// keypress ocurre cuando una tecla se presiona
// keydown cunado una tecla se deja de presionar
// keyup cuando los 2 eventos anteriores concluyeron consecutivamente.

/*Eventos de interfaz */
//error: utilizado en la carga de archivos multimedia
//ejemplo:
//  const img = document.querySelector(".img-producto")
// img.addEventListener("error"), () => {
//   console.log("error al cargar imagen");
// }

//load

//beforeunload: antes de irte de la seccion o pagina
//unload: cuando te vas de la seccion o pagina

//resize: cuando cambia la resolucion de la ventana

//scroll

//select
// registra lo que seleccionamos (al hacer click y arrastrar un texto.)

const input = document.querySelector(".input-prueba");
const container = document.querySelector(".seleccionado");

input.addEventListener("select", (e) => {
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  let textoCompleto = input.value;
  container.innerHTML = textoCompleto.substring(start, end);

});



//
//// Temporizadores
//

//setTimeout, ejecuta la funcion despues del tiempo indicado en milisegundos

// setTimeout(() => {
//   document.write("Hola")
// },2000)

//setInterval(), ejecuta la funcion cada vez que finalice el intervalo, por ejemplo cada 5 seg se ejecuta
