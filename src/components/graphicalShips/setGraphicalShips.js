import createHtmlElement from '../../services/createHtmlElement.js';
import style from './style.css'; // eslint-disable-line no-unused-vars
import waves from '../../../assets/waves.svg';

export default function () {
  const container = document.getElementById('graphicalShips');
  for (let i = 1; i <= 6; i++) {
    const str1 = 'shipContainer';
    createHtmlElement(container, 'div', [str1], '', `${str1}${i}`);
    const shipContainer = document.getElementById(`${str1}${i}`);
    const str2 = 'graphicalShip';
    createHtmlElement(shipContainer, 'div', [str2], '', `${str2}${i}`);
    const ship = document.getElementById(`${str2}${i}`);
    ship.style.backgroundImage = ` url(${waves})`;
    createHtmlElement(ship, 'div', ['leftSail']);
    createHtmlElement(ship, 'div', ['rightSail']);
    for (let j = 1; j <= 3; j++) {
      createHtmlElement(
        shipContainer,
        'div',
        ['backgroundRow', `${'backgroundRow'}${j}`],
        '',
        `${'backgroundRow'}-${i}-${j}`
      );
      const row = document.getElementById(`${'backgroundRow'}-${i}-${j}`);
      const url = ` url(${waves})`;
      row.style.backgroundImage = url;
    }
  }
}
