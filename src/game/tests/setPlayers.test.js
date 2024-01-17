import setPlayers from '../factories/setPlayers.js';

test('Game allows to set playeres', () => {
  const players = setPlayers('John Doe', 'Machine');
  expect(players.player1.name).toBe('John Doe');
  expect(players.player2.name).toBe('Machine');
});
