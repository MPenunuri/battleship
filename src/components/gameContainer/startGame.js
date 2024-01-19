import setGameContainer from './GUI/setGameContainer.js';
import setGame from '../../game/setGame.js';
import ships from '../../game/ships.js';

export default function startGame() {
  // First of all, we store the playerName in a local variable
  const playerName = document.querySelector('input').value;
  // We proceed by removing the form and adding gameboards to the DOM.
  setGameContainer(playerName);
  const playerShips = ships;
  const machineShips = ships;
  const game = setGame(playerName, 'Machine', playerShips, machineShips);
  console.log(game);
}
