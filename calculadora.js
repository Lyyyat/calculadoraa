const abrirpopup = document.getElementById('abrirpopup');
const fecharpopup = document.getElementById('fecharpopup');
const popup = document.getElementById('popup');

abrirpopup.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

fecharpopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

document.getElementById('calcularBtn').addEventListener('click', function () {
  const numLados = parseInt(document.getElementById('numLados').value);
  const lado = parseFloat(document.getElementById('lado').value);
  const resultadoDiv = document.getElementById('resultado');

  if (numLados < 3 || isNaN(numLados) || lado <= 0 || isNaN(lado)) {
    resultadoDiv.textContent = 'Insira valores válidos para o número de lados e o comprimento do lado.';
    return;
  }

  const area = (numLados * Math.pow(lado, 2)) / (4 * Math.tan(Math.PI / numLados));

  resultadoDiv.textContent = `A área do polígono é: ${area.toFixed(2)}`;
});
