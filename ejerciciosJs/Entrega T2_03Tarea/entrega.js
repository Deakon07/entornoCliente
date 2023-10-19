// Ancho y alto de la pantalla
const pantallaAlto = window.innerHeight;
const pantallaAncho = window.innerWidth;

// Averiguamos la posición inicial (X) de los coches obteniendo las imágenes por su ID.

var SalidaRojoX;
var SalidaAzulX;
var cocheAzul;
var cocheRojo;

window.onload = ()=>{
cocheRojo = document.getElementById('cocheRojo');
SalidaRojoX = cocheRojo.offsetLeft; // Posición horizontal X
cocheAzul = document.getElementById('cocheAzul');
SalidaAzulX = cocheAzul.offsetLeft; // Posición horizontal X
}


function comenzar() {
        cocheRojo.style.left= "0px";   
        cocheAzul.style.left= "0px";  
    }
    
var segundoBoton= setInterval(empate,40);
function empate() {
        if (SalidaRojoX <= pantallaAncho && SalidaAzulX <= pantallaAncho) {
            //Posición incrementando 8 la velocidad
            SalidaRojoX = SalidaRojoX +8;
            cocheRojo.style.left= SalidaRojoX +"px";
            //Posición incrementando 8 la velocidad
            cocheAzul.style.left= SalidaAzulX +8;
            cocheAzul.style.left= SalidaAzulX + "px";
        }
        if(SalidaRojoX == pantallaAncho && SalidaAzulX == pantallaAncho){
            cocheRojo.style.left= "0px";   
        cocheAzul.style.left= "0px";  
        }
        

    }

var tercerBoton= setInterval(correr,40);
function correr() {
    if (SalidaRojoX <= pantallaAncho && SalidaAzulX <= pantallaAncho) {
        //Posición incrementando 5 la velocidad
        cocheRojo.style.left= SalidaRojoX+"5px";
        //Posición incrementando 8 la velocidad
        cocheAzul.style.left= SalidaAzulX+"8px";
    }
    correr();
}

function stop(){

    clearInterval(tercerBoton);
    clearInterval(segundoBoton);
}


   
