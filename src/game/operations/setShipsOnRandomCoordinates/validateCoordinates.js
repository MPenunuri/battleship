export default function validateCoordinates(coordinates, gameboard) {
  for (let i = 0; i < coordinates.length; i++) {
    const row = coordinates[i][0];
    const col = coordinates[i][1];
    const place = gameboard[row][col];
    if ('ship' in place) return false;
  }
  return true;
}
