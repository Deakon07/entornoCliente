var number = 3;
function cuadrado(number) {
  return number * number;
}
console.log("Función tradicional " + cuadrado(5));

var anonima = function (number) {
  return number * number;
};
console.log("Función anónima " + anonima(5));

var cuadradoFlecha = (number) => {
  return number * number;
};
console.log("Funcion flecha " + cuadradoFlecha(5));
