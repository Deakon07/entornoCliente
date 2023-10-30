var array = [1, 3, 2, 5, 7, 4];

var arrayPar;
var arrayImpar;

var ParImpar = () => {
  arrayPar = array.filter((element) => element % 2 == 0);
  arrayImpar = array.filter((element) => element % 2 != 0);
};

ParImpar();

document.write("Pares: " + arrayPar + "<br>");
document.write("Impares: " + arrayImpar + "<br>");
