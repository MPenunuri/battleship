import receiveAttack from '../operations/receiveAttack.js';

export default function attackRandomly(playerGameboard) {
  let validCoordinates = false;
  let coordinates;
  while (validCoordinates === false) {
    const randomCellNum = (() => {
      return Math.floor(Math.random() * 100);
    })();
    const row = (() => {
      return randomCellNum < 10 ? 0 : Math.floor(randomCellNum / 10);
    })();
    const col = (() => {
      return randomCellNum < 10 ? randomCellNum : randomCellNum % 10;
    })();
    if (!playerGameboard[row][col].attacked) {
      coordinates = [row, col];
      validCoordinates = true;
    }
  }
  receiveAttack(playerGameboard, coordinates);
  return coordinates;
}
