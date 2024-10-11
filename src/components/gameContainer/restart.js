import setPlayerGameboard from './GUI/gameboards/setPlayerGameboard.js';
import setPlaceShipsTool from './GUI/setPlaceShipsTool.js';
import setRandomly from './GUI/placeShipsTool/setRandomly.js';
import play from '../../game/play.js';
import setGame from '../../game/setGame.js';

export default function () {
  const generalContainer = document.getElementById('generalContainer');
  generalContainer.classList.add('hide');
  let playerName = play.current.game.player1.name;
  play.current = setGame();
  play.current.setPlayerName(1, playerName);
  play.current.setPlayerName(2, 'Machine');
  // Place machine ships
  play.current.setPlayerShipsRandomly(2);
  setTimeout(() => {
    while (generalContainer.firstChild) generalContainer.firstChild.remove();
    const isMovile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    setPlayerGameboard();
    isMovile === false ? setPlaceShipsTool() : setRandomly();
    setTimeout(() => {
      generalContainer.classList.remove('hide');
      const playerSection = document.getElementById('playerSection');
      const pst = document.getElementById('pst'); // pst stands for place ships tool
      playerSection.classList.add('show');
      pst.classList.add('show');
    }, 500);
  }, 500);
}
