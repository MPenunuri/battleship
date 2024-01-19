import setPanel from './setPanel.js';
import setGameboards from './setGameboards.js';
import setPlaceShipsTool from './setPlaceShipsTool.js';

export default function setGameContainer(playerName) {
  const form = document.querySelector('form');
  form.classList.remove('show');
  setTimeout(() => {
    document.querySelector('form').remove();
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.add('gameContainer');
    setPanel(playerName);
    setGameboards();
    setPlaceShipsTool();
  }, 500);

  setTimeout(() => {
    const panel = document.querySelector('.panel');
    const playerGamboard = document.getElementById('playerGamboard');
    const machineGamboard = document.getElementById('AIGamboard');
    const pst = document.querySelector('.pst');
    panel.classList.add('show');
    playerGamboard.classList.add('show');
    machineGamboard.classList.add('show');
    pst.classList.add('show');
  }, 750);
}
