export default function getRandomDirection() {
  return Math.round(Math.random()) === 0 ? 'horizontal' : 'vertical';
}
