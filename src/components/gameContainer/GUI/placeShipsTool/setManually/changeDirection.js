export default function changeDirection() {
  const ships = document.querySelectorAll('.pstShip');
  let direction;
  ships.forEach((ship) => {
    if (ship.classList.contains('placedShip') === false) {
      if (ship.classList.contains('vertical')) {
        direction = 'horizontal';
        ship.classList.remove('vertical', 'rotate');
        ship.classList.add('horizontal');
      } else {
        direction = 'vertical';
        ship.classList.remove('horizontal');
        ship.classList.add('vertical', 'rotate');
      }
    }
  });
  const icon = document.getElementById('directionIcon');
  if (direction === 'vertical') {
    icon.style.transform = 'rotate(0deg)';
    icon.style.transition = 'transform 0.2s ease-in-out';
  } else {
    icon.style.transform = 'rotate(-90deg)';
    icon.style.transition = 'transform 0.2s ease-in-out';
  }
}
