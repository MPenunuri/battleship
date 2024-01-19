export default function drop(e) {
  //e.target.classList.remove('drag-over');
  //e.target.classList.add('ship');
  let offsets = JSON.parse(e.dataTransfer.getData('application/json'));
  let newX = e.clientX - offsets.offsetX;
  let newY = e.clientY - offsets.offsetY;

  const draggableId = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(draggableId);

  // Actualiza la posición del elemento
  draggable.style.left = newX + 'px';
  draggable.style.top = newY + 'px';

  setTimeout(() => {
    const rect = draggable.getBoundingClientRect();
    const topCoordinate = rect.top + window.scrollY;
    const bottomCoordinate = rect.bottom + window.scrollY;
    const leftCoordinate = rect.left + window.scrollX;
    const rightCoordinate = rect.right + window.scrollX;
    identifyElementsInArea(
      topCoordinate,
      bottomCoordinate,
      leftCoordinate,
      rightCoordinate,
      0
    );
  }, 1000);
}

function identifyElementsInArea(top, bottom, left, right, margin) {
  const allElements = document.querySelectorAll('.pgbc');

  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementBottom = rect.bottom + window.scrollY;
    const elementLeft = rect.left + window.scrollX;
    const elementRight = rect.right + window.scrollX;

    // Verificar si el elemento se superpone con el área del cuadrilátero considerando el margen
    if (
      elementTop <= bottom + margin &&
      elementBottom >= top - margin &&
      elementLeft <= right + margin &&
      elementRight >= left - margin
    ) {
      // El elemento se superpone con el área del cuadrilátero
      console.log('Elemento en o tocando el cuadrilátero:', element);
    }
  }
}
