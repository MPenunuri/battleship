import play from '../../../../../game/play.js';
import setMachine from '../../../../../game/setMachine.js';
import getCellId from '../getCellId.js';

export default function attack() {
  const gameboard = play.current.getGameboard(1);
  const machine = setMachine(gameboard);
  const attackCoordinates = machine.attack();
  const row = attackCoordinates[0];
  const col = attackCoordinates[1];
  const shipInCoordinates = (() => {
    return 'ship' in gameboard[row][col] ? true : false;
  })();
  const cell = document.getElementById(getCellId('pgbc', row, col));
  return { shipInCoordinates, cell };
}
