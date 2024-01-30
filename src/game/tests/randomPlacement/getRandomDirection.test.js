import getRandomDirection from '../../operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomDirection.js';

test('Does it provides a valid direction', () => {
  const expected = ['horizontal', 'vertical'];
  expect(expected).toContain(getRandomDirection());
});
