var arrayPal = []; //new array();
var palabras = "";

for (i = 0; i < 3; i++) {
  palabras = prompt("introduce palabras");
  if (palabras == null) {
    arrayPal.push("");
  } else {
    arrayPal.push(palabras);
  }
}

//array Inicial
console.log(`Array inicial: ${arrayPal}`);
var arrayNuevo = arrayPal.filter((arrayPal) => arrayPal.startsWith("C"));
console.log(`Array filtrado por C: ${arrayNuevo}`);
