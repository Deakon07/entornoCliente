//Ancho y alto de la pantalla
const pantallaAlto = window.innerHeight;
const pantallaAncho = window.innerWidth;

for (let i = 0; i < 2000; i++) {
  //Posición Top y Left aleatorias
  let posicionTop = Math.floor(Math.random() * pantallaAlto);
  let posicionLeft = Math.floor(Math.random() * pantallaAncho);
  //Colores RGB aleatorios desde 0 hasta 255
  let ramdonRed = Math.floor(Math.random() * 256);
  let ramdonGreen = Math.floor(Math.random() * 256);
  let ramdonBlue = Math.floor(Math.random() * 256);
  document.write(
    document
      .getElementById("recuadro")
      .style.backgroundColor(rgb(ramdonRed, ramdonGreen, ramdonBlue))
  );
  document.write((document.getElementById("recuadro").style.top = posicionTop));
  document.write(
    (document.getElementById("recuadro").style.left = posicionLeft)
  );
}
