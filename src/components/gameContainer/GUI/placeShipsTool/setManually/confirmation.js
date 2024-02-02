import play from '../../../../../game/play.js';
import shipsCoordinates from '../shipsCoordinates.js';
import placeShip from '../../../../../game/operations/placeShip.js';

const playerName = () => {
  if ('game' in play.current) return play.current.game.player1.name;
  else return undefined;
};
const legend = () => {
  return `Good job ${playerName()}! Now please confirm your selection or try again.`;
};
const gameboard = () => {
  if ('game' in play.current) return play.current.game.player1.gameboard;
  else return undefined;
};
const fn = () => shipsCoordinates.forEach((el) => placeShip(gameboard(), el));

export default {
  legend,
  fn,
};
