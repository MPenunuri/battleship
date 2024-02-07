import setGameboard from './setGameboard.js';

export default function setPlayers() {
  return {
    player1: {
      name: undefined,
      gameboard: setGameboard(),
      wins: 0,
      active: true,
    },
    player2: {
      name: undefined,
      gameboard: setGameboard(),
      wins: 0,
    },
  };
}
