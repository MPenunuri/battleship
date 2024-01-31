export default function attackVertical(playerGameboard, row, col) {
  if (
    row - 1 >= 0 &&
    'ship' in playerGameboard[row][col] &&
    !playerGameboard[row - 1][col].attacked
  ) {
    return [row - 1, col];
  } else {
    let idx = row + 1;
    while (playerGameboard[idx][col].attacked) idx++;
    return [idx, col];
  }
}
