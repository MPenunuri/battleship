import createHtmlElement from '../../../../services/createHtmlElement.js';
import style from './style.css'; // eslint-disable-line no-unused-vars
import getCoordinatesFromId from './getCoordinatesFromId.js';
import play from '../../../../game/play.js';
import receiveAttack from '../../../../game/operations/receiveAttack.js';
import machineAttack from './machineAttack.js';
import end from '../../end.js';

export default function setMachineGameboard() {
  /* User interactions take place on body => div#generalContainer */
  const generalContainer = document.getElementById('generalContainer');
  /* Gameboard is contained in a section element and is displayed
  in a grid of 10 x 10 */
  const gbClasses = ['gameboard', 'show']; // Shortcut for class name
  createHtmlElement(generalContainer, 'section', gbClasses, '', 'AISection');
  const machineSection = document.getElementById('AISection');
  createHtmlElement(machineSection, 'div', gbClasses, '', 'AIGameboard');
  const machineGameboard = document.getElementById('AIGameboard');

  for (let i = 0; i <= 99; i++) {
    createHtmlElement(machineGameboard, 'div', ['mgbc'], '', `mgbc${i}`);
  }
  const cells = document.querySelectorAll('.mgbc');
  const gameboard = play.current.getGameboard(2);
  // Add listeners to each cell
  cells.forEach((cell) => {
    const attackFn = () => {
      const activePlayer = play.current.game.player1.active;
      if (activePlayer) {
        const coordinates = getCoordinatesFromId(cell.id);
        const attack = receiveAttack(gameboard, coordinates);
        if (attack === true) cell.classList.add('attacked');
        else cell.classList.add('missed');
        cell.removeEventListener('click', attackFn);
        const status = play.current.allShipsSunk(gameboard);
        const legend = "You're a winner!";
        status === true ? end(legend) : machineAttack();
      }
      play.current.game.player1.active = false;
    };
    cell.addEventListener('click', attackFn);
  });
}
