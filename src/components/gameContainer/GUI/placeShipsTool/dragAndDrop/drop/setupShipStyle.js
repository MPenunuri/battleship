export default function setupShipStyle(draggable, newContainer, newX, newY) {
  newContainer.appendChild(draggable);
  draggable.style.left = newX + 'px';
  draggable.style.top = newY + 'px';
  draggable.style.margin = 0;
  draggable.classList.add('placedShip');
}
