//Obtienemos el ancho de la pantalla del dispositivo.
const anchoPantalla= innerWidth;

//Variables donde almacenaremos elementos HTML de los coches.
let cocheRojo;
let cocheAzul;

//Almacenan la posición inicial de los coches, inicializadas en 0.
let posicionInicialRojo = 0;
let posicionInicialAzul = 0;


// Guardamos el ancho de los 2 coches.
var anchoCocheRojo;
var anchoCocheAzul;

/*Representan la posición en la que el coche azul 
alcanza la "línea de meta" (el extremo de la pantalla)*/
var lineaMetaAZul;

//Variables de los 2 temporizadores
var tempoEmpate;
var tempoCarrera;

//Variables de los 3 botones
var botonEmpatar;
var botonCorrer;
var botonComenzar;

/*Usamos esta función para que no de undefined al acceder 
a los elementos del html desde javascript*/
window.onload = function() {
    cocheRojo= document.cocheRojo;
    cocheAzul= document.cocheAzul;

    //Con la propiedad offsetWidth hallamos el ancho de cada coche*/
    anchoCocheRojo = cocheRojo.offsetWidth;
    anchoCocheAzul = cocheAzul.offsetWidth;

    //Hallamos cuando llegan a la meta.
    lineaMetaRojo = anchoPantalla - anchoCocheRojo;
    lineaMetaAzul = anchoPantalla - anchoCocheAzul;

    //document.botonEmpate;
    //document.botonCorrer;

    botonEmpatar = document.querySelector('.botonEmpate');
    botonCorrer = document.querySelector('.botonCorrer');
    botonComenzar = document.querySelector('.botonComenzar');

}

//Devuelve los coches a la posición inicial
let comenzar = () => {
    posicionInicialRojo = 0;
    posicionInicialAzul = 0;
    cocheRojo.style.left = `${posicionInicialRojo}px`;
    cocheAzul.style.left = `${posicionInicialAzul}px`; 
    botonEmpatar.disabled = false;
    botonCorrer.disabled = false;
    botonComenzar.disabled = false; 
}

//Los 2 coches avanzarán a la misma velocidad.
let empatar=()=>{
    let empate = () => {
        posicionInicialRojo = posicionInicialRojo+ 8; 
        posicionInicialAzul = posicionInicialAzul+ 8; 
        cocheRojo.style.left = `${posicionInicialRojo}px`;
        cocheAzul.style.left = `${posicionInicialAzul}px`;
        
        /*Verifica si el coche azul ha cruzado la "línea de meta" 
        y devuelve a los coches a la posición inicial*/
        if (posicionInicialAzul > lineaMetaAzul) {
            comenzar();
        }
    }
    tempoEmpate = setInterval(empate, 40); 
    botonCorrer.disabled = true;
    botonComenzar.disabled = false;
    //document.botonCorrer.disabled= true;
    //document.botonComenzar.disabled= true;
}


//Los 2 coches avanzarán a distinta velocidad.
let carrera = () => {
    let aCorrer = () => {
        posicionInicialRojo += 7;
        posicionInicialAzul += 8;
        cocheRojo.style.left = `${posicionInicialRojo}px`;
        cocheAzul.style.left = `${posicionInicialAzul}px`;
/*Verifica si el coche azul ha cruzado la "línea de meta" 
y devuelve a los coches a la posición inicial*/
        if (posicionInicialAzul > lineaMetaAzul) {
            comenzar();
        }
    }
    tempoCarrera = setInterval(aCorrer, 40); 
    botonEmpatar.disabled = true;
    botonComenzar.disabled = false;
    //document.botonEmpatar.disabled= true;
    //document.botonComenzar.disabled= false;
}


//Detiene ambas carreras al detener los intervalos activos.
let stop = () =>{
    clearInterval(tempoEmpate);
    clearInterval(tempoCarrera);
}




