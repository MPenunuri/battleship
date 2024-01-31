import getAttackCoordinates from './machine/getAttackCoordinates.js';
import attackRandomly from './machine/attackRandomly.js';
import receiveAttack from './operations/receiveAttack.js';

export default function machine(gameboard) {
  const playerGameboard = gameboard;
  const activeTarget = () => {
    for (let i = 0; i < playerGameboard.length; i++) {
      for (let j = 0; j < playerGameboard[i].length; j++) {
        const place = playerGameboard[i][j];
        if (place.attacked) {
          if ('ship' in place && !place.ship.isSunk()) {
            return getAttackCoordinates(playerGameboard, i, j);
          }
        }
      }
    }
    return [];
  };
  const attack = () => {
    const target = activeTarget();
    //console.log(target);
    if (target.length === 0) {
      attackRandomly(playerGameboard);
    } else {
      receiveAttack(playerGameboard, target);
    }
  };
  return { attack };
}
