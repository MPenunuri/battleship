import receiveAttack from '../operations/receiveAttack.js';
import setGameboard from '../factories/setGameboard.js';
import placeShip from '../operations/placeShip.js';

test('Does ship receive attack', () => {
  const gameboard = setGameboard();
  const shipCoordinates = [
    [2, 3],
    [4, 3],
  ];
  placeShip(gameboard, shipCoordinates);
  const attackCoordinates = [3, 3];
  receiveAttack(gameboard, attackCoordinates);
  expect(gameboard[3][3].attacked).toBe(true);
  expect(gameboard[3][3].ship.hits).toBe(1);
});

test('Does gameboard keep track of missed attacks', () => {
  const gameboard = setGameboard();
  const attackCoordinates = [7, 0];
  receiveAttack(gameboard, attackCoordinates);
  expect(gameboard[7][0].attacked).toBe(true);
});
