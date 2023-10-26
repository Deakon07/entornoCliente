//var alumnos= new Array(5);
//alumnos[0]= new Array(2);


const M = 5, N = 2;
var alumnos = Array(M).fill().map(() => Array(N));


for (let i = 0; i < 5; i++) {
    var datos= prompt(`Introduce el nombre y nota del alumno ${i+1}`);
    var nombreYnota= datos.split(" ");
    alumnos.push(nombreYnota);
}
//console.log(alumnos);

aprobadoGral=() =>{
    alumnos.forEach( element, index);{
        alumnos[element]= 5;
    }
    
}

actualizarNotas=() =>{
    var nombre=prompt=("¿A quien quieres cambiarle la nota?");
    var nota=prompt=("¿Qué nota quieres ponerle?");
    alumnos.forEach((e) =>{
        if(alumnos.filter("nombre")){
            alumnos[nombre]= nota;
        }
 console.log(e);
});
}

verNotas =()=>{
    mostrarNotas= "";
    alumnos.forEach(element => {
        mostrarNotas.document.write(`${element} <br>`);
    });
}



