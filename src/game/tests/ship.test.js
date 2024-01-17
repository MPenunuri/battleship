import setShip from '../factories/setShip.js';

test('Does ship get hit', () => {
  const ship = setShip(3);
  let prevHits = ship.hits;
  ship.hit();
  expect(ship.hits).toBe(prevHits + 1);
});

test('The ship sinks"', () => {
  const ship = setShip(3);
  for (let i = 0; i < ship.length; i++) ship.hit();
  expect(ship.isSunk()).toBe(true);
});
