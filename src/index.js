import './style.css';
import setForm from './components/form/setForm.js';

const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
  setTimeout(() => {
    playBtn.remove();
  }, 500);
  setTimeout(() => {
    setForm();
  }, 1000);
});
