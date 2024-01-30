import createHtmlElement from '../../../../../services/createHtmlElement.js';

export default function setShipsOnPST() {
  const rows = document.querySelectorAll('.pstRow');
  // The ships' length was set up in the CSS file
  // See .pst div:nth-child(n) div:nth-child(n) expressions
  const classes = ['pstShip', 'vertical', 'rotate'];
  createHtmlElement(rows[0], 'div', classes, '', 'pShip6', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 6 cells length
  createHtmlElement(rows[1], 'div', classes, '', 'pShip5', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 5 cells length
  createHtmlElement(rows[1], 'div', classes, '', 'pShip2', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 2 cells length
  createHtmlElement(rows[2], 'div', classes, '', 'pShip4', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 4 cells length
  createHtmlElement(rows[2], 'div', classes, '', 'pShip3', [
    { attribute: 'draggable', value: 'true' },
  ]); // Ship with 3 cells length
}
