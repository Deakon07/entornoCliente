let gato = {
nombre: "Prada",
duerme: false,
edad: 1,
enemigos: new Array("vecina cotilla", "morcillón")
}

//Apartado 1

console.log(gato.enemigos[1]);

//Apartado 2
gato.color = "black";

gato.edad= 2;

delete gato.duerme;

console.log(gato);