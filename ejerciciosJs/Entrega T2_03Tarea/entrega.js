// Ancho y alto de la pantalla
const pantallaAlto = window.innerHeight;
const pantallaAncho = window.innerWidth;

// Averiguamos la posición inicial (X) de los coches obteniendo las imágenes por su ID.

var SalidaRojoX;
var SalidaAzulX;
var cocheAzul;
var cocheRojo;

window.onload = () => {
  cocheRojo = document.getElementById("cocheRojo");
  SalidaRojoX = cocheRojo.offsetLeft; // Posición horizontal X
  cocheAzul = document.getElementById("cocheAzul");
  SalidaAzulX = cocheAzul.offsetLeft; // Posición horizontal X
};

function comenzar() {
  cocheRojo.style.left = "0px";
  cocheAzul.style.left = "0px";
}

empatar = () => {
  if (SalidaRojoX <= pantallaAncho && SalidaAzulX <= pantallaAncho) {
    //Posición incrementando 8 la velocidad
    SalidaRojoX = SalidaRojoX + 8;
    cocheRojo.style.left = SalidaRojoX + "px";
    //Posición incrementando 8 la velocidad
    cocheAzul.style.left = SalidaAzulX + 8;
    cocheAzul.style.left = SalidaAzulX + "px";
  }
  if (SalidaRojoX == pantallaAncho && SalidaAzulX == pantallaAncho) {
    cocheRojo.style.left = "0px";
    cocheAzul.style.left = "0px";
  }
};

carrera = () => {
  if (SalidaRojoX <= pantallaAncho && SalidaAzulX <= pantallaAncho) {
    //Posición incrementando 5 la velocidad
    cocheRojo.style.left = SalidaRojoX + "5px";
    //Posición incrementando 8 la velocidad
    cocheAzul.style.left = SalidaAzulX + "8px";
  }
};

function stop() {
  clearInterval(tercerBoton);
  clearInterval(segundoBoton);
}

var tercerBoton;
function correr() {
  tercerBoton = setInterval(carrera, 40);
}
var segundoBoton;
function empate() {
  segundoBoton = setInterval(empatar, 40);
}
