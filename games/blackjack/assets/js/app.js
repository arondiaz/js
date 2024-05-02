/*
2C = Clubs
2D = Diamons
2H = Hearts
2S = Spades
*/

let deck = [];
const types = ["C", "D", "H", "S"];
const especiales = ["A", "J", "K", "Q"];

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
  console.log(deck);

  deck = _.shuffle(deck);
  console.log(deck);
}

crearDeck();
