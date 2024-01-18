import setGameContainer from './setGameContainer.js';

export default function startGame() {
  // First of all, we store the playerName in a local variable
  const playerName = document.querySelector('input').value;
  // We proceed by removing the form and adding gameboards to the DOM.
  setGameContainer(playerName);
}
