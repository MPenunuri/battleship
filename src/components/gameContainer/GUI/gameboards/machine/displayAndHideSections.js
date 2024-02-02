export default function displayAndHideSections() {
  const generalContainer = document.getElementById('generalContainer');
  // Hide general container
  generalContainer.classList.add('hide');
  // Display player section and hide AI section
  setTimeout(() => {
    const basicOrientation = document.getElementById('basicOrientation');
    basicOrientation.textContent = 'Now is machine turn.';
    const animationText = document.getElementById('animationText');
    animationText.textContent = 'Watch out!';
    const playerSection = document.getElementById('playerSection');
    playerSection.style.display = 'flex';
    const AISection = document.getElementById('AISection');
    AISection.style.display = 'none';
  }, 1000);
}
