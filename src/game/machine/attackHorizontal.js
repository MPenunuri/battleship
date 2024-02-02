import getAttackCoordinates from './getAttackCoordinates.js';

export default function attackHorizontal(playerGameboard, row, col) {
  if (
    col - 1 >= 0 &&
    'ship' in playerGameboard[row][col] &&
    !playerGameboard[row][col - 1].attacked
  ) {
    return [row, col - 1];
  } else {
    let idx = col + 1;
    while (
      playerGameboard[row][idx].attacked &&
      'ship' in playerGameboard[row][idx]
    ) {
      idx++;
    }
    return idx <= 9 && !playerGameboard[row][idx].attacked
      ? [row, idx]
      : getAttackCoordinates(playerGameboard, row, col, undefined);
  }
}
