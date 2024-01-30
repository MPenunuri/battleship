import getCoordinates from './setShipsOnRandomCoordinates/getRandomShipCoordinates.js';
import validate from './setShipsOnRandomCoordinates/validateCoordinates.js';
import placeShip from './placeShip.js';

export default function setShipsOnRandomCoordinates(gameboard) {
  const shipsLenghts = [6, 5, 4, 3, 2];
  const allShipsCoordinates = [];
  shipsLenghts.forEach((shipLength) => {
    let placedShip = false;
    while (placedShip === false) {
      const coordinates = getCoordinates(shipLength);
      const validation = validate(coordinates, gameboard);
      if (validation === true) {
        const startCoordinates = [coordinates[0][0], coordinates[0][1]];
        const idx = coordinates.length - 1;
        const endCoordinates = [coordinates[idx][0], coordinates[idx][1]];
        const shipCoordinates = [startCoordinates, endCoordinates];
        placeShip(gameboard, shipCoordinates);
        allShipsCoordinates.push(coordinates);
        placedShip = true;
      }
    }
  });
  return allShipsCoordinates;
}
