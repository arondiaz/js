//window
//https://developer.mozilla.org/es/docs/Web/API/Window

//windows, hereda las propiedades de event.target

//.open(), abre una nueva pestaña
// window.open("https://youtube.com")

//.close(), cierra la pestaña
//window.close()

//.closed, devuelve true or false si la ventana a la que se le hizo referencia fue cerrado o no.
//si guardamos la ventana en una variable podemos usar
// nombreVentana.closed

//.stop(), detiene la recarga de la pagina

//.alert("text")
// funciona poniendo aler("text"), sin necesidad de window.alert("text")

//print(), permite la impresion

//prompt(), alerta con input

//confirm(), alerta con boton de aceptar o cancelar.

//
///
//

//.screen, devuelve las propiedades del objeto screen. como el ancho y el alto.
const screen = window.screen;
console.log(screen);
console.log(typeof(screen))

//.screenLeft, devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo del monitor/ pantalla
//.screenTop,  devuelve la distancia vertical entre el borde superior del navegador y el borde superior del monitor/ pantalla



//scrollX, devuelve la distancia del desplazamiento horizontal X
//scrollY, devuelve la distancia del desplazamiento vertical Y


//scroll(), desplaza la venta a un lugar en particular dependiendo de la posicion indicada (0, 400)