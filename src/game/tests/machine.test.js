import setGameboard from '../factories/setGameboard.js';
import placeShip from '../operations/placeShip.js';
import receiveAttack from '../operations/receiveAttack.js';
import setMachine from '../setMachine.js';

test('Does the machine properly attack in the horizontal direction', () => {
  const playerGameboard = setGameboard();
  const coordinates = [
    [2, 2],
    [2, 7],
  ];
  placeShip(playerGameboard, coordinates);
  receiveAttack(playerGameboard, [2, 4]);
  receiveAttack(playerGameboard, [2, 5]);
  const machine = setMachine(playerGameboard);
  for (let i = 0; i <= 6; i++) machine.attack();
  expect(playerGameboard[2][2].ship.isSunk()).toBe(true);
});

test('Does the machine properly attack in the vertical direction', () => {
  const playerGameboard = setGameboard();
  const coordinates = [
    [2, 3],
    [7, 3],
  ];
  placeShip(playerGameboard, coordinates);
  receiveAttack(playerGameboard, [4, 3]);
  const machine = setMachine(playerGameboard);
  for (let i = 0; i <= 6; i++) machine.attack();
  expect(playerGameboard[2][3].ship.isSunk()).toBe(true);
});
