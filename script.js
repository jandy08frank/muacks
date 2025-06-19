// script.js
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");
  if (audio) {
    audio.play().catch(() => {
      console.warn("El navegador requiere interacción para el audio.");
    });
  }
});
