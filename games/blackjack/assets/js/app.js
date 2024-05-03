/*
2C = Clubs
2D = Diamons
2H = Hearts
2S = Spades
*/

let deck = [];
const types = ["C", "D", "H", "S"];
const especiales = ["A", "J", "K", "Q"];
let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias HTML
const btnPedir = document.querySelector("#btnPedir");
const btnNuevo = document.querySelector("#btnNuevo");
const btnDetener = document.querySelector("#btnDetener");
const marcadorPuntosJugador = document.querySelectorAll("small");
const jugadorCartas = document.querySelector("#jugador-cartas");
const computadoraCartas = document.querySelector("#computadora-cartas");

function crearDeck() {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of types) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of types) {
    for (let especial of especiales) {
      deck.push(especial + tipo);
    }
  }
  // console.log(deck);

  deck = _.shuffle(deck);
  console.log(deck);
}

crearDeck();

//Pedir carta

function pedirCarta() {
  if (deck.length === 0) {
    throw "No hay más cartas";
  }
  const carta = deck.pop();

  console.log(deck);

  return carta;
}

pedirCarta();
//Formas para quedarme sin cartas para verificar el error

// deck = []

// for (let i = 0; i <= 70; i++) {
//   pedirCarta();
// }

function valorCarta(carta) {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
}

const valor = valorCarta(pedirCarta());

console.log(valor);

//Eventos

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();

  puntosJugador = puntosJugador + valorCarta(carta);

  marcadorPuntosJugador[0].innerText = puntosJugador;

  const nuevaCarta = document.createElement("img");
  nuevaCarta.classList = "carta";
  nuevaCarta.src = `./assets/${carta}.png`;

  jugadorCartas.appendChild(nuevaCarta);
});
