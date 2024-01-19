export default function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove('drag-over');
}
