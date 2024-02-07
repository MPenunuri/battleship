import createHtmlElement from '../../../../services/createHtmlElement.js';
import setConfirmationBtn from './setConfirmationBtn.js';
import setTryAgainBtn from './setTryAgainBtn.js';
import createPST from './createPST.js';

export default function setFinalButtons(newLegend, confirmationFn, tryAgainFn) {
  const pst = (() => {
    return document.querySelectorAll('#pst').length === 0
      ? createPST()
      : document.getElementById('pst');
  })();
  // Hide temporary pst container
  if (pst.classList.contains('show')) pst.classList.remove('show');
  setTimeout(() => {
    // Remove unnecesary elements from previous step
    while (pst.firstChild) {
      pst.removeChild(pst.firstChild);
    }
    // Set new orientation to user
    createHtmlElement(pst, 'p', [], newLegend, 'legend');
    // Set confirmation button
    setConfirmationBtn(confirmationFn);
    // Set try again button
    setTryAgainBtn(tryAgainFn);
  }, 500);
  // Show pst container
  setTimeout(() => {
    pst.classList.add('show');
  }, 1000);
}
