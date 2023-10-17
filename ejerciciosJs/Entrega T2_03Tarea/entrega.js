// Ancho y alto de la pantalla
const pantallaAlto = window.innerHeight;
const pantallaAncho = window.innerWidth;


// Obtenemos las imágenes de los coches por su ID
const coche1 = document.getElementById('cocheRojo');
const coche2 = document.getElementById('cocheAzul');

//Le ponemos la ruta relativa de cada coche
coche1.src = '/images/coche rojo.png';
coche2.src = '/images/coche azul.png';
