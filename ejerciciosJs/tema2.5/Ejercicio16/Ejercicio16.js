let gato ={
nombre: "Prada",
duerme: true,
edad: 1,
enemigos: new Array("Vecina cotilla", "Morcillón"),
comer: function (){
    console.info(`Ahora esta comiendo`);
},
comerAlgo: function (parametro){
    console.log(`Ahora esta comiendo ${parametro} `);
},
quienCome: function (comida= "sardinas"){
    console.log(`${this.nombre} esta comiendo ${comida}`)
} 
}

console.log(gato.comer());
console.log(gato.comerAlgo("raton"));
console.log(gato.quienCome());