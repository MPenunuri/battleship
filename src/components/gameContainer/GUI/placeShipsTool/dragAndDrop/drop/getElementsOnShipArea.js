import identifyElementsInArea from './identifyElementsInArea.js';

export default function getElementsOnShipArea(draggable) {
  const rect = draggable.getBoundingClientRect();
  const topCoordinate = rect.top + window.scrollY;
  const bottomCoordinate = rect.bottom + window.scrollY;
  const leftCoordinate = rect.left + window.scrollX;
  const rightCoordinate = rect.right + window.scrollX;
  return identifyElementsInArea(
    '.pgbc',
    topCoordinate,
    bottomCoordinate,
    leftCoordinate,
    rightCoordinate,
    0
  );
}
