import setPanel from './setPanel.js';
import setGameboards from './setGameboards.js';
//import createHtmlElement from '../../services/createHtmlElement.js';

export default function setGameContainer(playerName) {
  const form = document.querySelector('form');
  form.classList.remove('show');
  setTimeout(() => {
    document.querySelector('form').remove();
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.add('gameContainer');
    setPanel(playerName);
    setGameboards();
  }, 1000);

  setTimeout(() => {
    const panel = document.querySelector('.panel');
    const playerGamboard = document.getElementById('playerGamboard');
    const machineGamboard = document.getElementById('AIGamboard');
    panel.classList.add('show');
    playerGamboard.classList.add('show');
    machineGamboard.classList.add('show');
  }, 1500);
}
