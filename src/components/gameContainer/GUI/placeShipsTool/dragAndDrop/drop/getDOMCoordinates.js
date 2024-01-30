export default function getDOMCoordinates(e) {
  // Get dragStart coordinates to setup ship location
  let offsets = JSON.parse(e.dataTransfer.getData('application/json'));
  // Calculate drop coordinates relatives to dragStart location
  let newX = e.clientX - offsets.offsetX;
  let newY = e.clientY - offsets.offsetY;
  // Calculate drop coordinates relatives to e.tarjet (gameboard cell)
  const container = document.getElementById(e.target.id);
  const containerRect = container.getBoundingClientRect();
  newX = newX - containerRect.left - 7;
  newY = newY - containerRect.top - 7;
  return { container, newX, newY };
}
