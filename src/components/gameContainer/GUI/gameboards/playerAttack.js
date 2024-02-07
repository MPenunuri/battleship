import play from '../../../../game/play.js';

export default function playerAttack() {
  play.current.game.player1.active = true;
  const basicOrientation = document.getElementById('basicOrientation');
  const playerName = play.current.game.player1.name;
  basicOrientation.textContent = `It's your turn ${playerName}:`;
  const animationText = document.getElementById('animationText');
  animationText.textContent = 'Attack!';
  animationText.style.color = 'green';
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  const AISection = document.getElementById('AISection');
  AISection.style.display = 'flex';
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
  }, 0);
}
