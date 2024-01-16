export default function setGameboard() {
  const gameboard = [];
  const cell = () => {
    return { attacked: false };
  };
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) row.push(cell());
    gameboard.push(row);
  }
  return gameboard;
}
