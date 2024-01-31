import identifyDirection from './identifyDirection.js';
import attackVertical from './attackVertical.js';
import attackHorizontal from './attackHorizontal.js';
import attackWithUndefinedDirection from './attackWithUndefinedDirection.js';

export default function getAttackCoordinates(playerGameboard, row, col) {
  const direction = identifyDirection(playerGameboard, row, col);
  if (direction === 'vertical') {
    return attackVertical(playerGameboard, row, col);
  } else if (direction === 'horizontal') {
    return attackHorizontal(playerGameboard, row, col);
  } else if (direction === undefined) {
    return attackWithUndefinedDirection(playerGameboard, row, col);
  }
}
