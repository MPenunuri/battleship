import Ship from '../factories/ship.js';

test('Does ship get hit', () => {
  const ship = Ship(3);
  let prevHits = ship.hits;
  ship.hit();
  expect(ship.hits).toBe(prevHits + 1);
});

test('The ship sinks"', () => {
  const ship = Ship(3);
  for (let i = 0; i < ship.length; i++) ship.hit();
  expect(ship.isSunk()).toBe(true);
});
