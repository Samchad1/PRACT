function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(carta => {
      carta.addEventListener('click', () => jugar(carta));
    });
  });

async function jugar(cartaElemento) {
  const resultado = document.getElementById('resultado');
  document.body.className = 'suspenso';
  resultado.textContent = 'Levantando carta...';

  const cartas = document.querySelectorAll('.carta');
  cartas.forEach(c => c.classList.add('deshabilitada'));

  cartaElemento.classList.add('raise');

  await esperar(2000);

  const mazo = [
    '✅ Te salvaste',
    '✅ Te salvaste',
    '✅ Te salvaste',
    '✅ Te salvaste',
    '✅ Te salvaste',
    '💀 Te metiste un tiro'
  ];

  const carta = mazo[Math.floor(Math.random() * mazo.length)];
  resultado.textContent = carta;
  cartaElemento.textContent = carta;

  if (carta.includes('💀')) {
    document.body.className = 'muerte';
  } else {
    document.body.className = 'salvado';
  }

  document.getElementById('reiniciar').style.display = 'inline-block';
}

  function reiniciar() {
    location.reload();
  }
}
