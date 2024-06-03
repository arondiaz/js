import _ from "underscore";

/**
 *
 * @param {Array<String>} tiposDeCartas ejemplo ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales ejemplo  ["A", "J", "K", "Q"]
 * @returns {Array} retorna un nuevo deck
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error("tiposDeCartas es obligatorio como un array de string");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es obligatorio como un array de string");
  
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
};
