import getAttackCoordinates from './getAttackCoordinates.js';

export default function attackVertical(playerGameboard, row, col) {
  if (
    row - 1 >= 0 &&
    'ship' in playerGameboard[row][col] &&
    !playerGameboard[row - 1][col].attacked
  ) {
    return [row - 1, col];
  } else {
    let idx = row + 1;
    while (
      playerGameboard[idx][col].attacked &&
      'ship' in playerGameboard[idx][col]
    ) {
      ++idx;
    }
    return idx <= 9 && !playerGameboard[idx][col].attacked
      ? [idx, col]
      : getAttackCoordinates(playerGameboard, row, col, 'horizontal');
  }
}
