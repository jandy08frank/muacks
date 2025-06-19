// script.js
const container = document.getElementById("heart-container");
const totalHearts = 600;

// Ecuación paramétrica para formar un corazón
// x = 16 sin³(t), y = 13 cos(t) - 5 cos(2t) - 2 cos(3t) - cos(4t)
function heartPath(t, scale = 10) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);
  return {
    x: x * scale,
    y: -y * scale, // invertido para pantalla
  };
}

for (let i = 0; i < totalHearts; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const t = Math.random() * Math.PI * 2;
  const { x, y } = heartPath(t, 10 + Math.random() * 2); // levemente aleatorio

  // Centro en el medio de la pantalla
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  heart.style.left = `${centerX + x}px`;
  heart.style.top = `${centerY + y}px`;

  // Animación aleatoria
  heart.style.animationDelay = `${Math.random() * 2}s`;

  container.appendChild(heart);
}
