import getRandomCellNum from './getRandomShipCoordinates/getRandomCellNum.js';
import getRandomDirection from './getRandomShipCoordinates/getRandomDirection.js';
import getCoordinates from './getRandomShipCoordinates/getCoordinates.js';

export default function getRandomShipCoordinates(shipLength) {
  const startCellNum = getRandomCellNum();
  const direction = getRandomDirection();
  const coordinates = getCoordinates(direction, startCellNum, shipLength);
  return coordinates;
}
