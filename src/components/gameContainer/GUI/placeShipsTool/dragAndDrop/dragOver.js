export default function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}
