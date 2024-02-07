import createHtmlElement from '../../services/createHtmlElement.js';
import restart from './restart.js';

export default function end(legendWinner) {
  const basicOrientation = document.getElementById('basicOrientation');
  basicOrientation.textContent = 'Game over';
  const animationText = document.getElementById('animationText');
  animationText.textContent = legendWinner;
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  const AISection = document.getElementById('AISection');
  AISection.style.display = 'none';
  const generalContainer = document.getElementById('generalContainer');
  createHtmlElement(
    generalContainer,
    'button',
    [],
    'Play again',
    'playAgainBtn',
    [{ attribute: 'type', value: 'button' }]
  );
  const playAgainBtn = document.getElementById('playAgainBtn');
  playAgainBtn.addEventListener('click', restart);
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
  }, 0);
}
