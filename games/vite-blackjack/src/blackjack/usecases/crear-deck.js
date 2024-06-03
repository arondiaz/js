import _ from "underscore";

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }

  return _.shuffle(deck);
}
