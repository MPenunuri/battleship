import shipsCoordinates from '../../shipsCoordinates.js';

export default function getGameCoordinates(shipId) {
  const cells = document.querySelectorAll(`.${shipId}`);
  const getCellNum = (cell) => {
    return cell.id.split('pgbc')[1];
  };
  const getCoordinates = (cellNum) => {
    if (cellNum.length === 1) return [0, cellNum];
    else if (cellNum.length === 2) return [cellNum[0], cellNum[1]];
    else return new Error('Invalid coordinates');
  };
  const startCell = cells[0];
  const endCell = cells[cells.length - 1];
  const startCoordinates = getCoordinates(getCellNum(startCell));
  const endCoordinates = getCoordinates(getCellNum(endCell));
  shipsCoordinates.push([startCoordinates, endCoordinates]);
}
