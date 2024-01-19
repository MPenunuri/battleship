import createHtmlElement from '../../../../services/createHtmlElement.js';

export default function setShipsOnPST() {
  const cols = document.querySelectorAll('.pstCol');
  // The ships' length was set up in the CSS file
  // See .pst div:nth-child(n) div:nth-child(n) expressions
  createHtmlElement(cols[0], 'div', ['pstShip'], '', 'pShip1', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 5 cells length
  createHtmlElement(cols[1], 'div', ['pstShip'], '', 'pShip2', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 4 cells length
  createHtmlElement(cols[1], 'div', ['pstShip'], '', 'pShip3', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 2 cells length
  createHtmlElement(cols[2], 'div', ['pstShip'], '', 'pShip4', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 3 cells length
  createHtmlElement(cols[2], 'div', ['pstShip'], '', 'pShip5', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 3 cells length
}
