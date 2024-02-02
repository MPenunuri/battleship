import createHtmlElement from '../../../../services/createHtmlElement.js';
import checkmark from '../../../../../assets/checkmark-circle-outline.svg';
import start from '../../start.js';

export default function setConfirmationBtn(confirmationFn) {
  const pst = document.getElementById('pst');
  createHtmlElement(pst, 'button', [], "Okay, let's play!", 'confirmationBtn', [
    {
      attribute: 'type',
      value: 'button',
    },
  ]);
  const confirmationBtn = document.getElementById('confirmationBtn');
  createHtmlElement(confirmationBtn, 'img', [], '', 'approvalIcon', [
    { attribute: 'src', value: checkmark },
    { attribute: 'alt', value: 'approval icon' },
  ]);
  confirmationBtn.addEventListener('click', () => {
    confirmationFn();
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.add('hide');
    setTimeout(() => {
      pst.remove();
      start();
    }, 1000);
  });
}
