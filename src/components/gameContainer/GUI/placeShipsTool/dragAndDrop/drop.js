export default function drop(e) {
  e.target.classList.remove('drag-over');
  e.target.classList.add('ship');
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);
  draggable.remove();
}
