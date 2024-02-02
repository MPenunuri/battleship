export default function attackWithUndefinedDirection(
  playerGameboard,
  row,
  col
) {
  if (row - 1 >= 0 && !playerGameboard[row - 1][col].attacked) {
    return [row - 1, col];
  } else if (row + 1 <= 9 && !playerGameboard[row + 1][col].attacked) {
    return [row + 1, col];
  } else if (col - 1 >= 0 && !playerGameboard[row][col - 1].attacked) {
    return [row, col - 1];
  } else if (col + 1 <= 9 && !playerGameboard[row][col + 1].attacked) {
    return [row, col + 1];
  }
}
