import createHtmlElement from '../../../../../services/createHtmlElement.js';
import arrow from '../../../../../../assets/arrow.svg';

export default function addElements(pst) {
  // Create user advice
  const legend = 'For a better experience, please take ships by the center.';
  createHtmlElement(pst, 'p', [], legend, 'legend');
  // Create change ships direction button
  createHtmlElement(pst, 'button', [], 'Change direction', 'directionBtn', [
    { attribute: 'type', value: 'button' },
  ]);
  const directionBtn = document.getElementById('directionBtn');
  createHtmlElement(directionBtn, 'img', [], '', 'directionIcon', [
    { attribute: 'src', value: arrow },
    { attribute: 'alt', value: 'directionIcon' },
  ]);
  // create draggable ships container
  createHtmlElement(pst, 'div', [], '', 'shipsContainer');
  const shipsContainer = document.getElementById('shipsContainer');
  for (let i = 0; i < 3; i++) {
    createHtmlElement(shipsContainer, 'div', ['pstRow']);
  }
}
