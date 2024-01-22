export default function identifyElementsInArea(
  elementsToSearch,
  top,
  bottom,
  left,
  right,
  margin
) {
  const allElements = document.querySelectorAll(elementsToSearch);
  const elements = [];

  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementBottom = rect.bottom + window.scrollY;
    const elementLeft = rect.left + window.scrollX;
    const elementRight = rect.right + window.scrollX;

    // Verifies  if each element overlaps the ship area
    if (
      elementTop <= bottom + margin &&
      elementBottom >= top - margin &&
      elementLeft <= right + margin &&
      elementRight >= left - margin
    ) {
      elements.push(element);
    }
  }
  return elements;
}
