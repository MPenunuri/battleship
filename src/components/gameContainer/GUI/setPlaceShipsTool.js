import createHtmlElement from '../../../services/createHtmlElement.js';
import setShipsOnPST from './placeShipsTool/setShipsOnPST.js';
import setDragAndDrop from './placeShipsTool/setDragAndDrop.js';

export default function setPlaceShipsTool() {
  setTimeout(() => {
    const gbPanel = document.getElementById('gbPanel');
    createHtmlElement(gbPanel, 'div', ['pst']); // pst stands for place ships tool
    const pst = document.querySelector('.pst');
    for (let i = 0; i < 3; i++) createHtmlElement(pst, 'div', ['pstCol']);
    setShipsOnPST();
    setDragAndDrop();
  }, 2000);
}
