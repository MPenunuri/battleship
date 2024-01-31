export default function attackHorizontal(playerGameboard, row, col) {
  if (
    col - 1 >= 0 &&
    'ship' in playerGameboard[row][col] &&
    !playerGameboard[row][col - 1].attacked
  ) {
    return [row, col - 1];
  } else {
    let idx = col + 1;
    while (playerGameboard[row][idx].attacked) idx++;
    return [row, idx];
  }
}
