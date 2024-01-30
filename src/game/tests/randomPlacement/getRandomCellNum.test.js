import getRandomCellNum from '../../operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomCellNum.js';

test('Does it provides a valid cell number', () => {
  expect(getRandomCellNum()).toBeGreaterThanOrEqual(0);
  expect(getRandomCellNum()).toBeLessThan(100);
});
