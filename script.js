function confesar() {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "Te quiero. No porque sea lógico, sino porque sin ti, nada lo es.";
  mensaje.style.opacity = 1;

  for (let i = 0; i < 20; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = Math.random() < 0.5 ? '❤️' : '💋';
    corazon.style.left = `${Math.random() * 100}%`;
    corazon.style.fontSize = `${1 + Math.random() * 2}rem`;
    corazon.style.animationDelay = `${Math.random() * 2}s`;

    document.getElementById('corazones').appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 4000);
  }
}
