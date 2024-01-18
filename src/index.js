import './style.css';
import setForm from './components/form/setForm.js';

const playBtn = document.getElementById('playBtn');

// setTimeout is used to display DOM animations
playBtn.addEventListener('click', () => {
  setTimeout(() => {
    playBtn.remove();
  }, 500);
  setTimeout(() => {
    setForm(); // The game starts requesting the player's name
  }, 500);
});
