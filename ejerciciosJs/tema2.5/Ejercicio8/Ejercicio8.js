var array = [1, 3, 2, 5, 7, 4];

var arrayPar;
var arrayImpar;

ParImpar = () => {
  arrayPar = array.filter((element) => element % 2 == 0);
  arrayImpar = array.filter((element) => element % 2 != 0);
};

document.write("Pares: " + ParImpar() + "<br>");
document.write("Impares: " + ParImpar() + "<br>");
