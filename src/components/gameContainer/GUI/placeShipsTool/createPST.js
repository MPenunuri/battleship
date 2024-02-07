export default function () {
  const generalContainer = document.getElementById('generalContainer');
  const playerSection = document.getElementById('playerSection');
  // Create pst container
  // pst stands for place-ships tool
  const pst = document.createElement('div');
  pst.setAttribute('id', 'pst');
  generalContainer.insertBefore(pst, playerSection);
  return pst;
}
