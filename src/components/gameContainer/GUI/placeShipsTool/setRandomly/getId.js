export default function getId(row, col) {
  let r = (() => {
    return row === 0 ? '' : row;
  })();
  return 'pgbc' + r + col;
}
