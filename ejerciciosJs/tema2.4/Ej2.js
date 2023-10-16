var numberUser = "";
do {
  numberUser = prompt("Introduce un numero positivo");
  if (numberUser < 0) {
    alert("El numero debe de ser positivo");
  } else if (isNaN(numberUser == true)) {
    alert("No es un numero");
  }
} while (numberUser < 0 || isNaN(numberUser));

var subtotal = 1;
var number = numberUser;
var factorial = (number) => {
  for (var number; number >= 1; number--) {
    subtotal = subtotal * number;
  }
  return subtotal;
};

console.log(`El factorial de ${numberUser} es:  ${factorial(number)}`);
