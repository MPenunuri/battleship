import setPlayerGameboard from './gameboards/setPlayerGameboard.js';
import setPlaceShipsTool from './setPlaceShipsTool.js';
import style from './style.css'; // eslint-disable-line no-unused-vars
import setRandomly from './placeShipsTool/setRandomly.js';

export default function setGameContainer() {
  const form = document.querySelector('form');
  form.classList.remove('show');
  const header = document.querySelector('header');
  header.classList.add('hide');
  const footer = document.querySelector('footer');
  footer.classList.add('hide');
  setTimeout(() => {
    header.remove();
    footer.remove();
    document.querySelector('form').remove();
    const isMovile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    setPlayerGameboard();
    isMovile === false ? setPlaceShipsTool() : setRandomly();
    setTimeout(() => {
      const playerSection = document.getElementById('playerSection');
      const pst = document.getElementById('pst'); // pst stands for place ships tool
      playerSection.classList.add('show');
      pst.classList.add('show');
    }, 500);
  }, 500);
}
