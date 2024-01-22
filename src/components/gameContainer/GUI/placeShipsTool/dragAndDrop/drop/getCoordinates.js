export default function getCoordinates(e) {
  // Get dragStart coordinates to setup ship location
  let offsets = JSON.parse(e.dataTransfer.getData('application/json'));
  // Calculate drop coordinates relatives to dragStart location
  let newX = e.clientX - offsets.offsetX;
  let newY = e.clientY - offsets.offsetY;
  // Calculate drop coordinates relatives to e.tarjet (gameboard cell)
  const container = document.getElementById(e.target.id);
  const containerRect = container.getBoundingClientRect();
  newX = newX - containerRect.left;
  newY = newY - containerRect.top;
  return { container, newX, newY };
}
