var numeroUsuario;

do{
    numeroUsuario= Number(prompt("Introduce un numero"));
    if(isNaN(numeroUsuario)){
        alert("No es un número. Inténtalo de nuevo");
    }else if( numeroUsuario<=0){
        alert("El numero debe ser mayor que 0");
    }
}while(isNaN(numeroUsuario) || numeroUsuario<=0);

var resultado = 0;
var cadSuma = " ";
let sumatorio= (numeroUsuario)=> {
    for (let i = numeroUsuario; i > 0; i--) {
        if(i!==1){
            cadSuma = cadSuma + i +  "+";
        }
        else if(i==1){
            cadSuma = cadSuma + i;
        }

        resultado= resultado+i;
    }
    document.write(`<p><strong>El sumatorio de ${numeroUsuario} es:</strong> ${cadSuma} = ${resultado}</p>`);
    }
    
        

sumatorio(numeroUsuario);