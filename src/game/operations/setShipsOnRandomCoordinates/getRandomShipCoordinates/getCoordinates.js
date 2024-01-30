export default function getCoordinates(direction, startCellNum, shipLength) {
  const coordinates = [];
  const row = (() => {
    return startCellNum < 10 ? 0 : Math.floor(startCellNum / 10);
  })();
  const col = (() => {
    return startCellNum < 10 ? startCellNum : startCellNum % 10;
  })();
  if (direction === 'vertical') {
    if (9 - (shipLength - 1) >= row) {
      for (let i = row; i < row + shipLength; i++) {
        coordinates.push([i, col]);
      }
    } else if (row - (shipLength - 1) >= 0) {
      for (let i = row; i > row - shipLength; i--) {
        coordinates.push([i, col]);
      }
    }
  } else if (direction === 'horizontal') {
    if (9 - (shipLength - 1) >= col) {
      for (let i = col; i < col + shipLength; i++) {
        coordinates.push([row, i]);
      }
    } else if (col - (shipLength - 1) >= 0) {
      for (let i = col; i > col - shipLength; i--) {
        coordinates.push([row, i]);
      }
    }
  }
  return coordinates;
}
