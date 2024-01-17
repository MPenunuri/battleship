import setGameboard from '../factories/setGameboard.js';

test("Gameboard it's a bidimensional array of 10 x 10", () => {
  const gameboard = setGameboard();
  expect(gameboard.length).toBe(10);
  for (let i = 0; i < 10; i++) {
    expect(gameboard[i].length).toBe(10);
  }
});
