import getCoordinates from './drop/getCoordinates.js';
import setupShipStyle from './drop/setupShipStyle.js';
import getElementsOnShipArea from './drop/getElementsOnShipArea.js';
import linkShipWithCell from './drop/linkShipWithCell.js';

export default function drop(e) {
  e.target.classList.remove('drag-over');
  // Get new container and coordinates
  let { container, newX, newY } = getCoordinates(e);
  // Setup placed ship style propierties
  const draggableId = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(draggableId);
  // draggable = ship
  setupShipStyle(draggable, container, newX, newY);
  // Get elements on ship area
  const elementsOnShipArea = getElementsOnShipArea(draggable);
  // Identify elements and change styles: Link the ship with valid cells
  elementsOnShipArea.forEach((element) =>
    linkShipWithCell(element, draggableId)
  );
}
