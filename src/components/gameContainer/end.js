export default function end(legendWinner) {
  const basicOrientation = document.getElementById('basicOrientation');
  basicOrientation.textContent = 'Game over';
  const animationText = document.getElementById('animationText');
  animationText.textContent = legendWinner;
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  const AISection = document.getElementById('AISection');
  AISection.style.display = 'none';
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
  }, 0);
}
