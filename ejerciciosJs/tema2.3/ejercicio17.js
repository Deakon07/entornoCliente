function mensaje() {
  console.log("En un lugar de la Mancha");
}

let tempo = setInterval(mensaje, 2000);

function detener() {
  clearInterval(tempo);
}

let segundoMen = setTimeout(para, 3000);

function segundoMen() {}

function para() {
  console.log("Han pasado 3 segundos");
}
