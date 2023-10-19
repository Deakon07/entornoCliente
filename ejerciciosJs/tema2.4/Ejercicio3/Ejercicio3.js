var numeroAleatorio;

let par= (numeroAleatorio)=> {
  if(numeroAleatorio %2== 0){
      return  document.write(`<p>Este ${numeroAleatorio} es par</p>`);
    }
   return document.write(`<p>Este ${numeroAleatorio} es impar</p>`);  
}

for (let i = 0; i < 10000; i++) {
    numeroAleatorio= Math.floor(Math.random()*501);
    par(numeroAleatorio);
} 

