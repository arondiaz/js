// const form = document.querySelector("#formulario");
// const list = document.querySelector("#lista-tweets");
// let tweets = [];

// listeners();
// function listeners(params) {
//   form.addEventListener("submit", agregarTweet);
// }

// function agregarTweet(e) {
//   e.preventDefault();

//   const tweet = document.querySelector("#tweet").value;

//   if (tweet.trim("") === "") {
//     showError("El tweet no puede ir vacío");
//     return;
//   }

//   tweets = [...tweets, tweet];
//   console.log(tweets);
// }

// function showError(msg) {
//   const msgError = document.createElement("P");
//   msgError.textContent = msg;
//   msgError.classList.add("error");

//   const container = document.querySelector("#contenido");
//   container.appendChild(msgError);

//   setTimeout(() => {
//     msgError.remove();
//   }, 2500);
// }

// const inputSubmit = document.querySelector("#addbtn");
// const listTweet = document.querySelector("#lista-tweets");
// let tweets = [];

// listeners();
// function listeners() {
//   inputSubmit.addEventListener("click", addTweet);

//   //
//   document.addEventListener("DOMContentLoaded", () => {
//     tweets = JSON.parse(localStorage.getItem("listTweets")) || [];

//     createHTML();
//   });
// }

// function addTweet(e) {
//   e.preventDefault();
//   const textArea = document.querySelector("#tweet").value;

//   if (textArea.trim("") === "") {
//     showError("El tweet no puede estar vacío");
//     return;
//   }

//   ////
//   // const newTweet = document.createElement("LI");
//   // newTweet.textContent = textArea;

//   // listTweet.appendChild(newTweet);

//   const tweetObj = {
//     id: Date.now(),
//     text: textArea,
//   };

//   tweets = [...tweets, tweetObj];

//   createHTML();

//   syncStorage();
// }

// function showError(msg) {
//   const createTag = document.createElement("P");
//   createTag.textContent = msg;
//   createTag.classList.add("error");

//   const container = document.querySelector("#contenido");
//   container.appendChild(createTag);

//   setTimeout(() => {
//     createTag.remove();
//   }, 2500);
// }

// function syncStorage(params) {
//   localStorage.setItem("listTweets", JSON.stringify(tweets));
// }

// function createHTML() {
//   cleanHTML();

//   tweets.forEach((tweet) => {
//     const btnDelete = document.createElement("A");

//     btnDelete.classList.add("borrar-tweet");
//     btnDelete.innerText = "X";

//     btnDelete.onclick = () => {
//       borrarTweet(tweet.id);
//     }

//     const newTweet = document.createElement("LI");

//     newTweet.textContent = tweet.text;
//     newTweet.appendChild(btnDelete)

//     listTweet.appendChild(newTweet);
//   });
// }

// function cleanHTML() {
//   while (listTweet.firstChild) {
//     listTweet.removeChild(listTweet.firstChild);
//   }
// }

// function borrarTweet(id) {
//   tweets = tweets.filter(tweet => tweet.id !== id)

//   createHTML()

// }

/////

// const addBtn = document.querySelector("#addbtn");
// const listTweets = document.querySelector("#lista-tweets");
// const textArea = document.querySelector("#tweet");
// const form = document.querySelector("#formulario");
// let tweets = [];
// let errorParrafo;

// listeners();
// function listeners() {
//   addBtn.addEventListener("click", addTweet);

//   document.addEventListener("DOMContentLoaded", () => {
//     tweets = JSON.parse(localStorage.getItem("tweetKey")) || [];

//     showTweets();
//   });
// }

// function addTweet(e) {
//   e.preventDefault();

//   if (textArea.value.trim() === "") {
//     showError("Esta vacio");
//     return;
//   }

//   tweetObj = {
//     id: Date.now(),
//     text: textArea.value,
//   };

//   tweets = [...tweets, tweetObj];

//   showTweets();

//   form.reset();
// }

// function showError(mensaje) {
//   if (!errorParrafo) {
//     errorParrafo = document.createElement("P");
//     errorParrafo.textContent = mensaje;
//     errorParrafo.classList.add("error");
//     const container = document.querySelector("#contenido");

//     container.appendChild(errorParrafo);
//   }

//   limpiarAlerta(errorParrafo);
// }

// function limpiarAlerta(parrafo) {
//   const write = document.querySelector("#tweet");
//   write.addEventListener("input", clean);

//   function clean(e) {
//     if (e.target.value) {
//       parrafo.remove();
//     }
//   }
// }

// function showTweets() {
//   cleanHTML();
//   tweets.forEach((tweet) => {
//     const deleteTweet = document.createElement("A");
//     deleteTweet.textContent = "X";
//     deleteTweet.classList.add("borrar-tweet");

//     deleteTweet.onclick = () => {
//       deleteX(tweet.id);
//     };

//     let li = document.createElement("LI");
//     li.textContent = tweet.text;
//     listTweets.appendChild(li);

//     li.appendChild(deleteTweet);
//   });

//   addToLocalStorage();
//   deleteX();
// }

// function cleanHTML() {
//   while (listTweets.firstChild) {
//     listTweets.removeChild(listTweets.firstChild);
//   }
// }

// function addToLocalStorage() {
//   localStorage.setItem("tweetKey", JSON.stringify(tweets));
// }

// function deleteX(id) {
//   tweets = tweets.filter((tweet) => id !== tweet.id);
//   showTweets();
// }

let tweets = [];

document.addEventListener("DOMContentLoaded", () => {


  const inputBtn = document.querySelector("#addbtn");
  const inputText = document.querySelector("#tweet");

  inputBtn.addEventListener("click", addTweet);

  function addTweet(e) {
    e.preventDefault();
    const tweet = inputText.value

    if (tweet.trim() === "") {
      showAlert("esta vacio");
      return;
    }

    let tweetObj = {
      id: Date.now(),
      name: tweet,
    }

    tweets = [...tweets, tweetObj];

    guardarLocalStorage();
  }
});

function showAlert(msg) {
  const existAlert = document.querySelector(".error");

  if (!existAlert) {
    const container = document.querySelector(".container");
    const alert = document.createElement("DIV");
    const alertP = document.createElement("P");
    alertP.classList.add("error");
    alertP.textContent = msg;
    alert.appendChild(alertP);
    container.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
}

function guardarLocalStorage() {
  if(tweets.length > 0){
    const lista = document.querySelector("#lista-tweets");
    limpiarHTML(lista);
    localStorage.setItem("userTweets", JSON.stringify(tweets));
    console.log(tweets);
  
    tweets.forEach((tweet) => {
      console.log(tweet);
      console.log(tweet.name);
      const li = document.createElement("LI");
      li.textContent = tweet.name;
      lista.appendChild(li);
    });

  }

  // sincronizarStorage()

}


// function sincronizarStorage() {
//   localStorage.setItem("tweets", JSON.stringify(tweets))
  
// }

function limpiarHTML(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}
