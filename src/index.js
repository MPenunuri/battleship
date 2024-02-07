import './style.css';
import setForm from './components/form/setForm.js';
import setGraphicalShips from './components/graphicalShips/setGraphicalShips.js';

const playBtn = document.getElementById('playBtn');

// Ships for visual purposes
setGraphicalShips();

// setTimeout is used to display DOM animations
playBtn.addEventListener('click', () => {
  setTimeout(() => {
    playBtn.remove();
  }, 500);
  setTimeout(() => {
    setForm(); // The game starts requesting the player's name
  }, 500);
});
