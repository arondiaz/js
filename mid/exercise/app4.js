const inputName = document.querySelector("#name");
const inputMail = document.querySelector("#mail");
const inputSubject = document.querySelector("#subject");
const btn = document.querySelector("#submit");
const errorElement = document.querySelector("#diverror")

const form = document.querySelector("#form");


form.addEventListener("submit", (e) => {
   console.log(e);

    let messages = []
    if(inputName.value === "" || inputName.value == null){

        messages.push("Nombre es requerido")
    }

    if(inputMail.value === "" || inputMail.value == null){

        messages.push("Mail es requerido")
    }

    if(inputSubject.value === "" || inputSubject.value == null){

        messages.push("Materia es requerida")
    
    }

    if(inputSubject.value.length >= 3){   
        e.preventDefault()
        messages.push("La materia debe tener al menos 4 caracteres")
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerHTML = messages.join(", ")
    }

})