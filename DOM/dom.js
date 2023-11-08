//DOM

// let hello = document.querySelector("#hi")

// document.write(hello);

// setAttribute() - modifica el valor del atributo.
// getAttribute() - obtiene el valor del atributo.
// removeAttribute() - remueve el valor del atributo.

const input = document.querySelector("#range")

input.setAttribute("type", "text")


//
////Atributos globales
//
//

// const domTitle = document.querySelector(".title")

// domTitle.setAttribute("text")



//contentEditable, true/ false editar elemento
const par = document.querySelector(".par")

par.setAttribute("contentEditable", "true")

//hidden, true/false ocultar elemento

//tabindex, + numbero del elemento para hacer "focus con tabs"

//title, + nombre al hacer hover figura un texto


//
//// Atributos de inputs
//
const inputSel = document.querySelector("#input")

console.log(inputSel.value)

inputSel.type = "number"

//cuando el input es type=file, podemos modificar que tipo de archivo acepta
input.accept = "image/png"

//si el input type="submit" esta por afuera del formulario, poniendo el atributo form=(mismo id que el formulario) lo asociamos para que al apretar ese boton se envien los datos del formulario estando el boton afuera
input.form = "formLogin"


//minLength, minima cantidad de caracteres que tiene un input
//maxLength

//placeholder
//required


//Styles

par.style.color = "green"


//createElement


//textContent, devuelve el texto


//
////Creacion de elementos
//

//createElement
const item = document.createElement("LI")
//createTextNode
const textItem = document.createTextNode("item de la lista")
//appendChild
item.appendChild(textItem)


const container = document.querySelector("#container")

container.appendChild(item)

console.log(item);

//innerHTML
item.innerHTML = "Hola"

//createDocumentFragment, crea varios elementos consumiendo menos recursos que si lo hacemos con un for