function mensaje() {
  console.log("En un lugar de la Mancha");
}

let tempo = setInterval(mensaje, 2000);

function detener() {
  clearInterval(tempo);
}

function hanPasado3Segundos() {
  console.log("Han pasado 3 segundos");
}

function para() {
  setTimeout(hanPasado3Segundos, 3000);
}

var nuevaVentana;
function abrirVentana() {
  nuevaVentana = window.open(
    "",
    "nuevaVentana",
    "toolbar=no,location=no,menubar=no,width=300px,height=300px"
  );
  nuevaVentana.document.write("<p>Hora actual</p>");
  setTimeout(pararUpdate, 5000);
  setTimeout(cerrarVentana, 10000);
}

function actualizarReloj() {
  var fecha = new Date();
  nuevaVentana.document.write(fecha.toLocaleTimeString() + "<br>");
}

var update = setInterval(actualizarReloj, 1000);

function pararUpdate() {
  clearInterval(update);
}

function cerrarVentana() {
  nuevaVentana.close();
}
