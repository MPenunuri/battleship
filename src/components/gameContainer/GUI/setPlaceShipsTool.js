import play from '../../../game/play.js';
import createHtmlElement from '../../../services/createHtmlElement.js';
import style from './placeShipsTool/style.css'; // eslint-disable-line no-unused-vars
import shuffle from '../../../../assets/shuffle-outline.svg';
import hand from '../../../../assets/hand-right-outline.svg';
import setRandomly from './placeShipsTool/setRandomly.js';
import setManually from './placeShipsTool/setManually.js';
import createPST from './placeShipsTool/createPST.js';

export default function setPlaceShipsTool() {
  // Create pst container
  // pst stands for place-ships tool
  const pst = createPST();
  // Create user advice
  const playerName = play.current.game.player1.name;
  const legend = `Hi ${playerName}! Please select how you want to place your navy:`;
  createHtmlElement(pst, 'p', [], legend, 'legend');
  // Create set randomly button
  createHtmlElement(pst, 'button', [], 'Set randomly', 'randomlyBtn');
  const randomlyBtn = document.getElementById('randomlyBtn');
  createHtmlElement(randomlyBtn, 'img', [], '', 'randomIcon', [
    { attribute: 'src', value: shuffle },
    { attribute: 'alt', value: 'random icon' },
  ]);
  randomlyBtn.addEventListener('click', () => {
    setRandomly();
  });
  // Create set manually button
  createHtmlElement(pst, 'button', [], 'Set manually', 'manuallyBtn');
  const manuallyBtn = document.getElementById('manuallyBtn');
  createHtmlElement(manuallyBtn, 'img', [], '', 'randomIcon', [
    { attribute: 'src', value: hand },
    { attribute: 'alt', value: 'hand icon' },
  ]);
  manuallyBtn.addEventListener('click', () => {
    setManually();
  });
}
