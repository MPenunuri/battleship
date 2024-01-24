import createHtmlElement from '../../../../services/createHtmlElement.js';
import style from './style.css'; // eslint-disable-line no-unused-vars

export default function setPlayerGameboard() {
  /* User interactions take place on body => div#generalContainer */
  const generalContainer = document.getElementById('generalContainer');
  /* Gameboard is contained in a section element and is displayed
  in a grid of 10 x 10 */
  const gb = 'gameboard'; // Shortcut for class name
  createHtmlElement(generalContainer, 'section', [], '', 'playerSection');
  const playerSection = document.getElementById('playerSection');
  createHtmlElement(playerSection, 'div', [gb], '', 'playerGameboard');
  const playerGameboard = document.getElementById('playerGameboard');
  for (let i = 0; i <= 99; i++) {
    createHtmlElement(playerGameboard, 'div', ['pgbc'], '', `pgbc${i}`);
  }
}
