import dragOver from '../dragOver.js';
import dragLeave from '../dragLeave.js';
import dragEnter from '../dragEnter.js';
import drop from '../drop.js';

export default function linkShipWithCell(cell, id) {
  cell.removeEventListener('dragenter', dragEnter);
  cell.removeEventListener('dragover', dragOver);
  cell.removeEventListener('dragleave', dragLeave);
  cell.removeEventListener('drop', drop);
  cell.classList.add('unavailableCell');
  cell.classList.add(id);
}
