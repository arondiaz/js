//DOM

// let hello = document.querySelector("#hi")

// document.write(hello);

// setAttribute() - modifica el valor del atributo.
// getAttribute() - obtiene el valor del atributo.
// removeAttribute() - remueve el valor del atributo.

const input = document.querySelector("#range");

input.setAttribute("type", "text");

//
////Atributos globales
//
//

// const domTitle = document.querySelector(".title")

// domTitle.setAttribute("text")

//contentEditable, true/ false editar elemento
const par = document.querySelector(".par");

par.setAttribute("contentEditable", "true");

//hidden, true/false ocultar elemento

//tabindex, + numbero del elemento para hacer "focus con tabs"

//title, + nombre al hacer hover figura un texto

//
//// Atributos de inputs
//
const inputSel = document.querySelector("#input");

console.log(inputSel.value);

inputSel.type = "number";

//cuando el input es type=file, podemos modificar que tipo de archivo acepta
input.accept = "image/png";

//si el input type="submit" esta por afuera del formulario, poniendo el atributo form=(mismo id que el formulario) lo asociamos para que al apretar ese boton se envien los datos del formulario estando el boton afuera
input.form = "formLogin";

//minLength, minima cantidad de caracteres que tiene un input
//maxLength

//placeholder
//required

//Styles

par.style.color = "green";

//createElement

//textContent, devuelve el texto

//
////Creacion de elementos
//

//createElement
const item = document.createElement("LI");
//createTextNode
const textItem = document.createTextNode("item de la lista");
//appendChild
item.appendChild(textItem);

const container = document.querySelector("#container");

container.appendChild(item);

console.log(item);

//innerHTML
item.innerHTML = "Hola";

//createDocumentFragment, crea varios elementos consumiendo menos recursos que si lo hacemos con un for

//
//// Obtención y modificación de childs(hijos)
//   (firstElementChild    -    lastElementChild    -    children (Son los mas usados de esta sección))


//firsChild y lastChild, devuelve el primer elemento del html incluyendo los espacios que existen en el documento html

const hijo = container.firstChild;

console.log(hijo);


//firstElementChild
//lastElementChild

const hijoY = container.firstElementChild
console.log(hijoY);


//childNodes, devuelve una lista de elementos que hay dentro de ese contenedor



//children, devuelve solo los elementos al igual que firstElementChild y lastElementChild


const children = container.children
console.log(children);


// replacheChild()

// removeChild()

// hasChildNodes()


const seccion = document.querySelector("#sectionContainer")

const h4New = document.createElement("H4")
h4New.innerHTML = "Hi everyone!"

const titleSection = document.querySelector(".sectionh4")

seccion.replaceChild(h4New, titleSection,)


//

const psection = document.querySelector(".sectionp")
seccion.removeChild(psection)

//hasChildNodes(), devuelve true or false dependiendo de si tiene hijos o no.




//parentElement (mas usado)
//parentNode


//siblings, (hermanos)
// mas usados
// nextElementSibling
// previousElementSibling
//------------------------

// nextSibling
// previousSibling
