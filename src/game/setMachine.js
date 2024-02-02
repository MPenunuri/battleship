import identifyDirection from './machine/identifyDirection.js';
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
            const direction = identifyDirection(playerGameboard, i, j);
            return getAttackCoordinates(playerGameboard, i, j, direction);
          }
        }
      }
    }
    return [];
  };
  const attack = () => {
    const target = activeTarget();
    if (target.length === 0) {
      return attackRandomly(playerGameboard);
    } else {
      receiveAttack(playerGameboard, target);
      console.log(target);
      return target;
    }
  };
  return { attack };
}
