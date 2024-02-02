// Throughout the entire project,
// createHtmlElement is used to efficiently add DOM elements
import createHtmlElement from '../../services/createHtmlElement.js';
import setup from '../gameContainer/setup.js';
import style from './style.css'; // eslint-disable-line no-unused-vars

export default function setForm() {
  const generalContainer = document.getElementById('generalContainer');
  createHtmlElement(generalContainer, 'form');
  const form = document.querySelector('form');
  createHtmlElement(form, 'label', [], 'Enter your name:', 'nameLabel', [
    { attribute: 'for', value: 'playerName' },
  ]);
  createHtmlElement(form, 'input', [], '', 'playerName', [
    { attribute: 'type', value: 'text' },
    { attribute: 'name', value: 'playerName' },
    { attribute: 'placeholder', value: 'Enter name' },
    { attribute: 'autocomplete', value: 'on' },
  ]);
  const input = document.querySelector('input');
  input.required = true;
  createHtmlElement(form, 'button', [], 'Start game', 'startBtn', [
    { attribute: 'type', value: 'button' },
  ]);
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    setup(); // Once user enter their name, the game starts
  });
  setTimeout(() => {
    form.classList.add('show');
  }, 500);
}
