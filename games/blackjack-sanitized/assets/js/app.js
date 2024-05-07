/*
2C = Clubs
2D = Diamons
2H = Hearts
2S = Spades
*/

// funcion anonima autoinvocada
// (function () {
// })()

const appCompleta = (() => {
  "use strict";

  let deck = [];
  const types = ["C", "D", "H", "S"],
    especiales = ["A", "J", "K", "Q"];

  // let puntosJugador = 0,
  //   puntosComputadora = 0;
  let puntosJugadores = [];

  //Referencias HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnNuevo = document.querySelector("#btnNuevo"),
    btnDetener = document.querySelector("#btnDetener");

  const marcadorPuntos = document.querySelectorAll("small"),
    divCartasJugadores = document.querySelectorAll(".divCartas");

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    marcadorPuntos.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));
    btnDetener.disabled = false;
    btnPedir.disabled = false;
  };

  inicializarJuego();

  function crearDeck() {
    deck = [];

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

    return _.shuffle(deck);
  }

  function pedirCarta() {
    if (deck.length === 0) {
      throw "No hay más cartas";
    }
    return deck.pop();
  }

  pedirCarta();

  function valorCarta(carta) {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
  }

  const valor = valorCarta(pedirCarta());

  //Turno: 0= primer jugador y el ultimo sera la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);

    marcadorPuntos[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const nuevaCarta = document.createElement("img");
    nuevaCarta.classList = "carta";
    nuevaCarta.src = `./assets/${carta}.png`;
    divCartasJugadores[turno].appendChild(nuevaCarta);
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosMinimos === 21 && puntosComputadora === 21) {
        alert("Empate");
      } else if (puntosMinimos === 21) {
        alert("Blackjack");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador gana");
      } else {
        alert("Computadora gana");
      }
    }, 100);
  };

  //Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  function turnoComputadora(puntosMinimos) {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora <= puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  }

  btnDetener.addEventListener("click", () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  // btnNuevo.addEventListener("click", () => {
  //   inicializarJuego();
  // });


  return {
    nuevoJuego: inicializarJuego,
  }

})();
