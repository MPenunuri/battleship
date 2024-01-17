import setPlayers from './factories/setPlayers.js';
import placeShip from './operations/placeShip.js';
import receiveAttack from './operations/receiveAttack.js';
import allShipsSunk from './operations/allShipsSunk.js';

export default function setGame(
  namePlayer1,
  namePlayer2,
  shipsPlayer1,
  shipsPlayer2
) {
  const game = setPlayers(namePlayer1, namePlayer2);
  shipsPlayer1.forEach((ship) => {
    placeShip(game.player1.gameboard, ship);
  });
  shipsPlayer2.forEach((ship) => {
    placeShip(game.player2.gameboard, ship);
  });
  return { game, receiveAttack, allShipsSunk };
}
