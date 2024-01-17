import allShipsSunk from '../operations/allShipsSunk.js';
import setGameboard from '../factories/setGameboard.js';
import placeShip from '../operations/placeShip.js';
import receiveAttack from '../operations/receiveAttack.js';

test('Does gameboard report if all ships have been sunk', () => {
  const gameboard = setGameboard();
  const shipsCoordinates = [
    [
      [2, 3],
      [3, 3],
    ],
    [
      [0, 0],
      [0, 1],
    ],
    [
      [5, 6],
      [6, 6],
    ],
  ];
  shipsCoordinates.forEach((coordinates) => {
    placeShip(gameboard, coordinates);
  });
  shipsCoordinates.forEach((coordinates) => {
    for (let i = 0; i < coordinates.length; i++) {
      receiveAttack(gameboard, coordinates[i]);
    }
  });
  expect(allShipsSunk(gameboard)).toBe(true);
});
