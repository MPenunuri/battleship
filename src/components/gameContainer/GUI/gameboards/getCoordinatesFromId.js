export default function getCoordinatesFromId(cellId) {
  const cellNum = cellId.split('mgbc')[1];
  const rowNum = (() => {
    return cellNum.length === 1 ? 0 : cellNum[0];
  })();
  const colNum = (() => {
    return cellNum.length === 1 ? cellNum : cellNum[1];
  })();
  return [parseInt(rowNum), parseInt(colNum)];
}
