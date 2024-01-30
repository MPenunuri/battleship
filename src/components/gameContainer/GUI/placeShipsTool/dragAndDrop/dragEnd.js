export default function dragEnd(e) {
  if (e.target.classList.contains('vertical')) {
    e.target.classList.add('rotate');
  }
  setTimeout(() => {
    e.target.classList.remove('hide');
  }, 0);
}
