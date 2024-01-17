import createHtmlElement from '../../services/createHtmlElement.js';

export default function setGameContainer() {
  document.querySelector('form').remove();
  const gameContainer = document.getElementById('gameContainer');

  createHtmlElement(gameContainer, 'section', [], '', 'playerSection');
  const playerSection = document.getElementById('playerSection');
  createHtmlElement(playerSection, 'div', [], '', 'playerGamboard');
  const playerGamboard = document.getElementById('playerGamboard');

  createHtmlElement(gameContainer, 'section', [], '', 'machineSection');
  const machineSection = document.getElementById('machineSection');
  createHtmlElement(machineSection, 'div', [], '', 'machineGamboard');
  const machineGamboard = document.getElementById('machineGamboard');

  for (let i = 0; i < 100; i++) {
    createHtmlElement(playerGamboard, 'div');
    createHtmlElement(machineGamboard, 'div');
  }
}
