export default function getCellId(str, row, col) {
  let r = (() => {
    return row === 0 ? '' : row;
  })();
  return str + r + col;
}
