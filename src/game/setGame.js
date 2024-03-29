import setPlayers from './factories/setPlayers.js';
import placeShip from './operations/placeShip.js';
import receiveAttack from './operations/receiveAttack.js';
import allShipsSunk from './operations/allShipsSunk.js';
import setGameboard from './factories/setGameboard.js';
import setShipsOnRandomCoordinates from './operations/setShipsOnRandomCoordinates.js';

export default function setGame() {
  const game = setPlayers();
  const getGameboard = (playerId) => {
    return game[`player${playerId}`].gameboard;
  };
  const setPlayerName = (id, name) => {
    game[`player${id}`].name = name;
  };
  const setPlayerShips = (playerId, ships) => {
    const gameboard = getGameboard(playerId);
    ships.forEach((ship) => {
      placeShip(gameboard, ship);
    });
  };
  const restoreGameboard = (playerId) => {
    return (game[`player${playerId}`].gameboard = setGameboard());
  };
  const setPlayerShipsRandomly = (playerId) => {
    restoreGameboard(playerId);
    let gameboard = getGameboard(playerId);
    const randomCoordinates = setShipsOnRandomCoordinates(gameboard);
    return randomCoordinates;
  };
  return {
    game,
    getGameboard,
    setPlayerName,
    setPlayerShips,
    setPlayerShipsRandomly,
    receiveAttack,
    allShipsSunk,
  };
}
