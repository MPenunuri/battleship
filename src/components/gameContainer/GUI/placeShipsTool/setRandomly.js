import play from '../../../../game/play.js';
import setFinalButtons from './setFinalButtons.js';
import confirmation from './setRandomly/confirmation.js';
import getId from './setRandomly/getId.js';
import createHtmlElement from '../../../../services/createHtmlElement.js';
import style from './setRandomly/style.css'; // eslint-disable-line no-unused-vars

export default function setRandomly() {
  // Add confirmation and try again buttons
  const legend = confirmation.legend;
  setFinalButtons(legend, confirmation.fn, setRandomly);
  // Get ships coordinates
  const setPlayerShipsRandomly = play.current.setPlayerShipsRandomly;
  const shipsCoordinates = setPlayerShipsRandomly(1);
  // Apply style to corresponding DOM cells
  shipsCoordinates.forEach((shipCoordinates) => {
    const shipLength = shipCoordinates.length;
    const direction = (() => {
      return shipCoordinates[0][0] === shipCoordinates[1][0]
        ? 'horizontal'
        : 'vertical';
    })();
    const firstCell = document.getElementById(
      getId(shipCoordinates[0][0], shipCoordinates[0][1])
    );
    const shipClasses = [direction, 'randomlyPlacedShip'];
    createHtmlElement(firstCell, 'div', shipClasses, '', `l${shipLength}ship`);
    setTimeout(() => {
      for (let i = 0; i < shipLength; i++) {
        const row = shipCoordinates[i][0];
        const col = shipCoordinates[i][1];
        const id = getId(row, col);
        const cell = document.getElementById(id);
        cell.classList.add('unavailableCell');
      }
      const ships = document.querySelectorAll('.randomlyPlacedShip');
      ships.forEach((ship) => {
        ship.classList.add('show');
      });
    }, 500);
  });
}
