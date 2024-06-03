/**
 * Esta función nos permite pedir cartas
 * @param {Array<String>} deck
 * @returns <String>
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay más cartas";
  }
  return deck.pop();
};
