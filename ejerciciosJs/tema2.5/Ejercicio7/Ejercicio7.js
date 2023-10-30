var palabra = prompt("Dime una palabra");

var cadenaSep;
if (palabra == null) {
  document.write("cadena vacía");
} else {
  cadenaSep = palabra.split("");
  var cadenaVuelta = cadenaSep.reverse();
  cadenaVuelta = cadenaVuelta.join("");
  document.write(` La palabra ${palabra} invertida es ${cadenaVuelta}`);
}
