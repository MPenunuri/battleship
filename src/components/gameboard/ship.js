export default function newShip(length) {
  const ship = {
    length,
    hits: 0,
    isSunk: () => {
      return ship.hits === ship.length ? true : false;
    },
    hit: () => {
      ship.hits += 1;
    },
  };
  return ship;
}
