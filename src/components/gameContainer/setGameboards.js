import createHtmlElement from '../../services/createHtmlElement.js';

export default function setGameboards() {
  /* Gameboards are contained in a special container. */
  const generalContainer = document.getElementById('generalContainer');
  createHtmlElement(generalContainer, 'div', ['gameboardsContainer']);
  const gameboardsContainer = document.querySelector('.gameboardsContainer');
  const gb = 'gameboard'; // Shortcut for class name
  /* Each gameboard is contained in a section element and is displayed
  in a grid of 10 x 10 */
  createHtmlElement(gameboardsContainer, 'section', [gb], '', 'playerSection');
  const playerSection = document.getElementById('playerSection');
  createHtmlElement(playerSection, 'div', [gb], '', 'playerGamboard');
  const playerGamboard = document.getElementById('playerGamboard');
  /* Between gamboards there is a panel with game information*/
  createHtmlElement(gameboardsContainer, 'section', ['.scorePanel']);
  //const gbPanel = document.querySelector('.gbPanel');
  // PENDIENTE ADICIONAR ELEMENTOS DEL PANEL

  createHtmlElement(gameboardsContainer, 'section', [gb], '', 'AISection');
  const machineSection = document.getElementById('AISection');
  createHtmlElement(machineSection, 'div', [gb], '', 'AIGamboard');
  const machineGamboard = document.getElementById('AIGamboard');

  for (let i = 0; i < 100; i++) {
    createHtmlElement(playerGamboard, 'div');
    createHtmlElement(machineGamboard, 'div');
  }
}
