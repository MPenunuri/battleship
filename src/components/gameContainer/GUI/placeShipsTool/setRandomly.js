import play from '../../../../game/play.js';
import getId from './setRandomly/getId.js';

export default function setRandomly() {
  // pst stands for place-ships tool
  const pst = document.getElementById('pst');
  // Delete html elements from previous step
  pst.classList.remove('show');
  while (pst.firstChild) {
    pst.removeChild(pst.firstChild);
  }
  // Get ships coordinates
  const setPlayerShipsRandomly = play.current.setPlayerShipsRandomly;
  const shipsCoordinates = setPlayerShipsRandomly(1);
  // Apply style to corresponding DOM cells
  shipsCoordinates.forEach((shipCoordinates) => {
    for (let i = 0; i < shipCoordinates.length; i++) {
      const row = shipCoordinates[i][0];
      const col = shipCoordinates[i][1];
      const id = getId(row, col);
      const cell = document.getElementById(id);
      cell.classList.add('unavailableCell');
    }
  });
  // Display gameboard
  setTimeout(() => {
    pst.classList.add('show');
  }, 500);
}
