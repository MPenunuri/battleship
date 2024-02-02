import setPanel from './GUI/setPanel.js';
import setMachineGameboard from './GUI/gameboards/setMachineGameboard.js';

export default function start() {
  const generalContainer = document.getElementById('generalContainer');
  setPanel();
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  setMachineGameboard();

  setTimeout(() => {
    generalContainer.classList.remove('hide');
  }, 500);
}
