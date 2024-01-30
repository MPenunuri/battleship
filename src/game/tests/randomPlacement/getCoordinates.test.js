import getCoordinates from '../../operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getCoordinates.js';

test('It provides a valid range of coordinates', () => {
  // Vertical example
  const expected1 = [
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
  ];
  const vertical = getCoordinates('vertical', 34, 6);
  expect(expected1).toStrictEqual(vertical);
  // Horizontal example
  const expected2 = [
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
    [4, 7],
  ];
  const horizontal = getCoordinates('horizontal', 42, 6);
  expect(expected2).toStrictEqual(horizontal);
});
