import createHtmlElement from '../../services/createHtmlElement.js';

export default function setPanel(playerName) {
  const gameContainer = document.querySelector('.gameContainer');
  createHtmlElement(gameContainer, 'section', ['panel']);
  const panel = document.querySelector('.panel');
  createHtmlElement(panel, 'div', ['playerPanel'], playerName);
  createHtmlElement(panel, 'div', ['modularPanel'], 'VS.');
  createHtmlElement(panel, 'div', ['AIPanel'], 'Machine');
}
