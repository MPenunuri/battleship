import identifyElementsInArea from './identifyElementsInArea.js';

export default function getElementsOnShipArea(
  draggable,
  newContainer,
  newX,
  newY,
  shipLength
) {
  const clone = draggable.cloneNode(false);
  if (clone.classList.contains('vertical')) {
    clone.style.height = shipLength * 28 + 'px';
    clone.style.width = 16 + 'px';
  } else if (clone.classList.contains('horizontal')) {
    clone.style.height = 16 + 'px';
    clone.style.width = shipLength * 28 + 'px';
  }
  clone.style.left = newX + 'px';
  clone.style.top = newY + 'px';
  clone.style.margin = 0;
  clone.setAttribute('id', 'clone');
  newContainer.appendChild(clone);
  const rect = clone.getBoundingClientRect();
  const topCoordinate = rect.top + window.scrollY;
  const bottomCoordinate = rect.bottom + window.scrollY;
  const leftCoordinate = rect.left + window.scrollX;
  const rightCoordinate = rect.right + window.scrollX;
  clone.remove();
  return identifyElementsInArea(
    '.pgbc',
    topCoordinate,
    bottomCoordinate,
    leftCoordinate,
    rightCoordinate,
    0
  );
}
