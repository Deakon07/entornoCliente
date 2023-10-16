var number = 3;
function cuadrado(number) {
  return number * number;
}
console.log("Función tradicional " + cuadrado(5));

var cuadrado2 = function (number) {
  return number * number;
};
console.log("Función anónima " + cuadrado2);

var cuadradoFlecha = (number) => {
  return number * number;
};
console.log("Funcion flecha " + cuadradoFlecha(5));
