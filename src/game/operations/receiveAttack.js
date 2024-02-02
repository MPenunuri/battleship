export default function receiveAttack(gameboard, coordinates) {
  const row = coordinates[0];
  const col = coordinates[1];
  const place = gameboard[row][col];
  if (place.attacked === true) return new Error('Place already attacked.');
  place.attacked = true;
  if ('ship' in place) {
    place.ship.hit();
    return true;
  } else return false;
}
