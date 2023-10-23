const arr = [2, 3, 4, 5, 0];

var suma = 0;
arr.forEach((element) => {
  suma = suma + element;
});
console.log(suma); //Ejercicio1.1

//Ejercicio1.2
console.log(suma / arr.length);

//Ejercicio1.3
var arr2 = arr.map((element) => element * 3);

console.log(arr2);

//Ejercicio1.4
arr.forEach((element, index) => {
  arr[index] = element * 3;
  console.log(arr);
});

//var arr3 = arr2.map((element) => element * 3);

//console.log(arr3);

//Ejercicio2

var palabras = "";
do {
  palabras = prompt("introduce 3 palabras");
} while (!isNaN(palabras));
