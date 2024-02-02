import createHtmlElement from '../../../services/createHtmlElement.js';

export default function setPanel() {
  const generalContainer = document.getElementById('generalContainer');
  createHtmlElement(generalContainer, 'section', [], '', 'panel');
  const panel = document.getElementById('panel');
  createHtmlElement(panel, 'p', [], 'Panel');
}
