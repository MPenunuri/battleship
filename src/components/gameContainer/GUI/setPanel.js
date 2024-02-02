import createHtmlElement from '../../../services/createHtmlElement.js';
import play from '../../../game/play.js';

export default function setPanel() {
  const generalContainer = document.getElementById('generalContainer');
  const playerSection = document.getElementById('playerSection');
  const panel = document.createElement('section');
  panel.setAttribute('id', 'panel');
  panel.classList.add('show');
  generalContainer.insertBefore(panel, playerSection);
  const playerName = play.current.game.player1.name;
  const legend = `It's your turn ${playerName}:`;
  createHtmlElement(panel, 'p', [], legend, 'basicOrientation');
  createHtmlElement(panel, 'p', [], 'Attack!', 'animationText');
}
