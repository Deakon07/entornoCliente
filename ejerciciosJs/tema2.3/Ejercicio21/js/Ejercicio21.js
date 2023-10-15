// Ancho y alto de la pantalla
const pantallaAlto = window.innerHeight;
const pantallaAncho = window.innerWidth;

var posicionTop;
var posicionLeft;
var randomRed;
var randomBlue;
var randomGreen;

for (let i = 0; i < 2000; i++) {
  // Posición Top y Left aleatorias
  posicionTop = Math.floor(Math.random() * pantallaAlto);
  posicionLeft = Math.floor(Math.random() * pantallaAncho);
  // Colores RGB aleatorios desde 0 hasta 255. El random incluye el 0 y exlcuye el 255 por eso lo ponemos hasta el 256
  randomRed = Math.floor(Math.random() * 256);
  randomGreen = Math.floor(Math.random() * 256);
  randomBlue = Math.floor(Math.random() * 256);
  
  // Usar comillas simples para escribir el div
  document.write(
    `<div class="recuadro" style="position: absolute; top: ${posicionTop}px; left: ${posicionLeft}px; background-color: rgb(${randomRed},${randomGreen},${randomBlue}); width: 50px; height: 50px;"></div>`
  );
}
