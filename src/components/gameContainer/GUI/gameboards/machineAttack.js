import displayAndHideSections from './machine/displayAndHideSections.js';
import Attack from './machine/attack.js';
import playerAttack from './playerAttack.js';
import play from '../../../../game/play.js';
import end from '../../end.js';

export default function machineAttack() {
  setTimeout(() => {
    displayAndHideSections();
  }, 500);
  // Set machine and attack
  const attack = Attack();
  // Display html elements, styles and adnimations
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
    setTimeout(() => {
      if (attack.shipInCoordinates) {
        attack.cell.classList.remove('unavailableCell');
        attack.cell.classList.add('attacked');
      } else {
        attack.cell.classList.add('missed');
      }
      setTimeout(() => {
        const gameboard = play.current.getGameboard(1);
        const status = play.current.allShipsSunk(gameboard);
        generalContainer.classList.add('hide');
        setTimeout(() => {
          const legend = 'Machine wins :(';
          status === true ? end(legend) : playerAttack();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
}
