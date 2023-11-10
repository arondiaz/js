const container = document.querySelector(".flex-container")

function crearLlave(nombre,modelo,precio){
    img = "<img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`
    modelo = `<h2>${modelo}</h2>`
    precio = `<h2>Precio ${precio}</h2>`
    return [img,nombre,modelo,precio]
}

const llave = crearLlave("llave one", "modelo X", "33")
console.log(llave);

container.innerHTML = llave