import setGameboard from './setGameboard.js';

export default function setPlayers(name1, name2) {
  return {
    player1: { name: name1, gameboard: setGameboard(), wins: 0, active: true },
    player2: { name: name2, gameboard: setGameboard(), wins: 0, active: false },
  };
}
