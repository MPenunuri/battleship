import createHtmlElement from '../../../services/createHtmlElement.js';
import setShipsOnPST from './placeShipsTool/setShipsOnPST.js';
import setDragAndDrop from './placeShipsTool/setDragAndDrop.js';
import style from './placeShipsTool/style.css'; // eslint-disable-line no-unused-vars
import arrow from '../../../../assets/arrow.svg';
import changeDirection from './placeShipsTool/changeDirection.js';

export default function setPlaceShipsTool() {
  const generalContainer = document.getElementById('generalContainer');
  createHtmlElement(generalContainer, 'div', [], '', 'pst'); // pst stands for place ships tool
  const pst = document.getElementById('pst');
  createHtmlElement(pst, 'div', [], '', 'btnContainer');
  const btnDiv = document.getElementById('btnContainer');
  createHtmlElement(btnDiv, 'button', [], 'Change direction', 'directionBtn', [
    { attribute: 'type', value: 'button' },
  ]);
  createHtmlElement(btnDiv, 'img', [], '', 'directionIcon', [
    { attribute: 'src', value: arrow },
    { attribute: 'alt', value: 'directionIcon' },
  ]);
  createHtmlElement(pst, 'div', [], '', 'shipsContainer');
  const shipsContainer = document.getElementById('shipsContainer');
  for (let i = 0; i < 3; i++) {
    createHtmlElement(shipsContainer, 'div', ['pstRow']);
  }
  setShipsOnPST();
  const btn = document.getElementById('directionBtn');
  btn.addEventListener('click', () => {
    changeDirection();
  });
  setDragAndDrop();
}
