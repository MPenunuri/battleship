import setGameboard from '../../factories/setGameboard.js';
import placeShip from '../../operations/placeShip.js';
import validateCoordinates from '../../operations/setShipsOnRandomCoordinates/validateCoordinates.js';

test("Doesn't allow placing ships in an unavailable location.", () => {
  const gameboard = setGameboard();
  // placeShip requires only start and end coordinates
  const ship1coordinates = [
    [1, 3],
    [6, 3],
  ];
  placeShip(gameboard, ship1coordinates);
  // validateCoordinates requires all coordinates (from start to end)
  const ship2coordinates = [
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
  ];
  const validation = validateCoordinates(ship2coordinates, gameboard);
  expect(validation).toBe(false);
});
