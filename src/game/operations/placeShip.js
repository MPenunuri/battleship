import setShip from '../factories/setShip.js';

export default function placeShip(gameboard, coordinates) {
  console.log(coordinates);
  const start = coordinates[0];
  const end = coordinates[1];
  const cells = [];
  const axis = (() => {
    const x = (() => {
      return start[0] === end[0] ? true : false;
    })();
    const length = (() => {
      return x === true ? end[1] - start[1] : end[0] - start[0];
    })();
    return { x, length };
  })();
  if (axis.x === true) {
    for (let i = 0; i <= axis.length; i++) {
      cells.push([start[0], start[1] + i]);
    }
  } else {
    for (let i = 0; i <= axis.length; i++) {
      cells.push([start[0] + i, start[1]]);
    }
  }
  const ship = setShip(axis.length);
  cells.forEach((cell) => {
    console.log(cell);
    const place = gameboard[cell[0]][cell[1]];
    if ('ship' in place) return new Error('Ship in place');
    else gameboard[cell[0]][cell[1]].ship = ship;
  });
}
