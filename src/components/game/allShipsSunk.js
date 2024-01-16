export default function allShipsSunk(gameboard) {
  let status = true;
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard[i].length; j++) {
      const place = gameboard[i][j];
      console.log(place);
      if ('ship' in place && place.ship.isSunk() === false) {
        status = false;
      }
    }
  }
  return status;
}
