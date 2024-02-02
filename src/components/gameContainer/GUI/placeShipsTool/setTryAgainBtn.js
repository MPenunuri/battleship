import createHtmlElement from '../../../../services/createHtmlElement.js';
import setPlayerGameboard from '../gameboards/setPlayerGameboard.js';
import repeat from '../../../../../assets/repeat-outline.svg';

export default function setTryAgainBtn(tryAgainFn) {
  const pst = document.getElementById('pst');
  createHtmlElement(pst, 'button', [], 'Let me try again', 'tryAgainBtn', [
    {
      attribute: 'type',
      value: 'button',
    },
  ]);
  const tryAgainBtn = document.getElementById('tryAgainBtn');
  createHtmlElement(tryAgainBtn, 'img', [], '', 'repeatIcon', [
    { attribute: 'src', value: repeat },
    { attribute: 'alt', value: 'repeat icon' },
  ]);
  tryAgainBtn.addEventListener('click', () => {
    pst.classList.remove('show');
    const playerSection = document.getElementById('playerSection');
    playerSection.classList.remove('show');
    setTimeout(() => {
      playerSection.remove();
      setTimeout(() => {
        setPlayerGameboard();
      }, 250);
    }, 500);
    setTimeout(() => {
      tryAgainFn();
      setTimeout(() => {
        const newPlayerSection = document.getElementById('playerSection');
        newPlayerSection.classList.add('show');
      }, 500);
    }, 1000);
  });
}
