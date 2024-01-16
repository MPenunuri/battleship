import placeShip from './placeShip.js';
import setGameboard from './setGameboard.js';

test('Gameboard allows to place ships', () => {
  const gameboard = setGameboard();
  const coordinates = [
    [2, 3],
    [4, 3],
  ];
  placeShip(gameboard, coordinates);
  const start = coordinates[0];
  const end = coordinates[1];
  const startShip = gameboard[start[0]][start[1]];
  const endShip = gameboard[end[0]][end[1]];
  expect(startShip.ship).toBe(endShip.ship);
  expect(startShip.ship).toBe(gameboard[3][3].ship);
});
