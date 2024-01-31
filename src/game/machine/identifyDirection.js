export default function identifyDirection(playerGameboard, row, col) {
  let direction = undefined;
  const top = (() => {
    return row - 1 >= 0 ? playerGameboard[row - 1][col] : false;
  })();
  const bottom = (() => {
    return row + 1 <= 9 ? playerGameboard[row + 1][col] : false;
  })();
  const left = (() => {
    return col - 1 >= 0 ? playerGameboard[row][col - 1] : false;
  })();
  const right = (() => {
    return col + 1 <= 9 ? playerGameboard[row][col + 1] : false;
  })();
  if (top && top.attacked && 'ship' in top) {
    direction = 'vertical';
  } else if (bottom && bottom.attacked && 'ship' in bottom) {
    direction = 'vertical';
  } else if (left && left.attacked && 'ship' in left) {
    direction = 'horizontal';
  } else if (right && right.attacked && 'ship' in right) {
    direction = 'horizontal';
  }
  return direction;
}
