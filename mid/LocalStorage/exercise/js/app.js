const form = document.querySelector("#formulario");
const list = document.querySelector("#lista-tweets");

listeners();
function listeners(params) {
  form.addEventListener("click", agregarTweet);
}

function agregarTweet(e) {
  e.preventDefault();

  const tweet = document.querySelector("#tweet").value;
  
 if(tweet.trim("") === ""){
    showError("El tweet no puede ir vacío");
    return
 }
}


function showError(msg) {
    const msgError = document.createElement("P")
    msgError.textContent = msg
    msgError.classList.add("error")
    
    const container = document.querySelector("#contenido")
    container.appendChild(msgError)

    setTimeout(() => {
        msgError.remove()
    }, 2500);
}




// const form = document.querySelector("#formulario")



// form.addEventListener("click", agregarTweet)


// function agregarTweet(e) {
//     e.preventDefault()
   
//     const textArea = document.querySelector("#tweet").value

//     if(textArea.trim("") === ""){
//         showError("esta vacio");
//         return
//     }
    
//     console.log("Bien");
// }


// function showError(msg) {
//    const show = document.createElement("P")
//     show.textContent = msg;
//     show.classList.add("error")


//     const showHTML = document.querySelector("#lista-tweets")
//     showHTML.appendChild(show)
// }