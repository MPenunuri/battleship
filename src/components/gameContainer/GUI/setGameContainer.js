import setPlayerGameboard from './gameboards/setPlayerGameboard.js';
import setPlaceShipsTool from './setPlaceShipsTool.js';
import style from './style.css'; // eslint-disable-line no-unused-vars

export default function setGameContainer() {
  const form = document.querySelector('form');
  form.classList.remove('show');
  setTimeout(() => {
    document.querySelector('form').remove();
    setPlaceShipsTool();
    setPlayerGameboard();
  }, 500);

  setTimeout(() => {
    const playerSection = document.getElementById('playerSection');
    const pst = document.getElementById('pst'); // pst stands for place ships tool
    playerSection.classList.add('show');
    pst.classList.add('show');
  }, 750);
}
