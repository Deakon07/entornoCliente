var crearObjeto=()=>{
let taxi ={
    tipoMotor: "diesel", 
    numeroPasajeros: 4,
    carga: 3500,
    velocidad: 5,
    ruedas: 5,
    saludar : function(){
alert(`Hola soy un taxi de ${taxi.ruedas} ruedas y ${taxi.numeroPasajeros} pasajeros`);
    }
}
taxi.saludar();
}

