import dragStart from './dragAndDrop/dragStart.js';
import dragOver from './dragAndDrop/dragOver.js';
import dragLeave from './dragAndDrop/dragLeave.js';
import dragEnd from './dragAndDrop/dragEnd.js';
import dragEnter from './dragAndDrop/dragEnter.js';
import drop from './dragAndDrop/drop.js';

export default function setDragAndDrop() {
  const ships = document.querySelectorAll('.pstShip');
  ships.forEach((ship) => {
    ship.addEventListener('dragstart', dragStart);
    ship.addEventListener('dragend', dragEnd);
  });
  const cells = document.querySelectorAll('.pgbc');
  cells.forEach((cell) => {
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragleav', dragLeave);
    cell.addEventListener('drop', drop);
  });
}
