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

const addBtn = document.querySelector("#addbtn");
const listTweets = document.querySelector("#lista-tweets");
const textArea = document.querySelector("#tweet");

listeners();
function listeners(params) {
  addBtn.addEventListener("click", addTweet);
}

function addTweet(e) {
  e.preventDefault();

  if (textArea.value.trim() === "") {
    pepito("Esta vacio");
    return;
  }
}

function pepito(mensaje) {
  const parrafo = document.createElement("P");
  parrafo.textContent = mensaje;
  parrafo.classList.add("error");

  const container = document.querySelector("#contenido");

  container.appendChild(parrafo);

  limpiarAlerta(parrafo);

}

function limpiarAlerta(parrafo) {
  const write = document.querySelector("#tweet");
  write.addEventListener("input", clean);

  function clean(e) {
    if (e.target.value) {
      parrafo.remove();
    }
  }
}

// function borrarDuplicados(e) {

//   if (e) {
//     console.log(e);
//   }
// }
