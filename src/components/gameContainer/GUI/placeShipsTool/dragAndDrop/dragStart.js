export default function dragStart(e) {
  let offsetX = e.clientX - e.target.getBoundingClientRect().left;
  let offsetY = e.clientY - e.target.getBoundingClientRect().top;
  e.dataTransfer.setData(
    'application/json',
    JSON.stringify({ offsetX, offsetY })
  );
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}
