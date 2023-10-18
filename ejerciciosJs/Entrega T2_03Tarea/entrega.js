// Ancho y alto de la pantalla
const pantallaAlto = window.innerHeight;
const pantallaAncho = window.innerWidth;

// Averiguamos la posición inicial (X, Y) de los coches obteniendo las imágenes por su ID.
var cocheRojo = document.getElementById('cocheRojo');
var RojoPosY = cocheRojo.offsetTop;  // Posición vertical Y
var RojoPosX = cocheRojo.offsetLeft; // Posición horizontal X

var cocheAzul = document.getElementById('cocheAzul');
var AzulPosY = cocheAzul.offsetTop;  // Posición vertical Y
var AzulPosX = cocheAzul.offsetLeft; // Posición horizontal X

var primerBoton= setInterval(comenzar,1000);

function comenzar() {
    if (RojoPosX < pantallaAncho && AzulPosX < pantallaAncho) {
            RojoPosX= RojoPosX + 1;  // Mueve el coche rojo hacia la derecha
            AzulPosX= AzulPosX + 2;  // Mueve el coche azul hacia la derecha
    } else {
            // Los coches han llegado al final, detenemos el intervalo
            clearInterval(primerBoton);
        }
        
        
    }

   
