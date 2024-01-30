import setGameContainer from './GUI/setGameContainer.js';
import setGame from '../../game/setGame.js';
import play from '../../game/play.js';

export default function startGame() {
  // Start game and set up players name
  const playerName = document.querySelector('input').value;
  play.current = setGame();
  play.current.setPlayerName(1, playerName);
  play.current.setPlayerName(2, 'Machine');
  // We proceed by removing the form and adding player gameboard to the DOM.
  setGameContainer();
  console.log(play);
}
