export default function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}
