export default function dragEnd(e) {
  e.target.classList.remove('hide');
  if (e.target.classList.contains('vertical')) {
    e.target.classList.add('rotate');
  }
}
