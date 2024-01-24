import getDOMCoordinates from './drop/getDOMCoordinates.js';
import setupShipStyle from './drop/setupShipStyle.js';
import getElementsOnShipArea from './drop/getElementsOnShipArea.js';
import linkShipWithCell from './drop/linkShipWithCell.js';
import getGameCoordinates from './drop/getGameCoordinates.js';

//import shipsCoordinates from '../shipsCoordinates.js';
// MUY BIEN la herramienta funciona ¿ahora qué?

export default function drop(e) {
  e.target.classList.remove('drag-over');
  // Get new container and coordinates relatives to viewport
  let { container, newX, newY } = getDOMCoordinates(e);
  // Get ship element (draggable = ship)
  const draggableId = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(draggableId);
  const shipLength = parseInt(draggableId.charAt(draggableId.length - 1), 10);
  // Get elements on ship area (draggable = ship)
  const elementsOnShipArea = getElementsOnShipArea(
    draggable,
    container,
    newX,
    newY,
    shipLength
  );
  // Verify if dragAndDrop is a valid movement
  if (elementsOnShipArea.length !== shipLength) {
    e.preventDefault();
    if (e.target.classList.contains('vertical')) {
      e.target.classList.add('rotate');
    }
  } else {
    // Setup placed ship style propierties (draggable = ship)
    setupShipStyle(draggable, container, newX, newY);
    // Identify elements and change styles: Link the ship with valid cells
    elementsOnShipArea.forEach((element) =>
      linkShipWithCell(element, draggableId)
    );
    // Get game coordinates for internal app purposes
    getGameCoordinates(draggableId);
  }
}
