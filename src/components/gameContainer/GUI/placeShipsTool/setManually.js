import addElements from './setManually/addElements.js';
import setShipsOnPST from './setManually/setShipsOnPST.js';
import setDragAndDrop from './setManually/setDragAndDrop.js';
import changeDirection from './setManually/changeDirection.js';

export default function setManually() {
  // pst stands for place-ships tool
  const pst = document.getElementById('pst');
  // Delete html elements from previous step
  pst.classList.remove('show');
  while (pst.firstChild) {
    pst.removeChild(pst.firstChild);
  }
  // Create user advice, change ships direction button and draggable ships container
  addElements(pst);
  // Set draggable ships on tool container
  setShipsOnPST();
  // Add functionality to button
  const directionBtn = document.getElementById('directionBtn');
  directionBtn.addEventListener('click', () => {
    changeDirection();
  });
  // Set drag and drop functionalities to ships and gameboard
  setDragAndDrop();
  setTimeout(() => {
    pst.classList.add('show');
  }, 500);
}
