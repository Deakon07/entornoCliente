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

function nuevaVentana() {
  var nuevaVentana = window.open(
    "",
    "nuevaVentana",
    "toolbar=no,location=no,menubar=no,width=300,height=300,resizable= yes,scrollbars= yes,top= 500,left = 500"
  );

  nuevaVentana.document.write("<p>Hora actual</p>");
  function actualizarReloj() {
    var fecha = new Date();
    nuevaVentana.document.write(fecha.toLocaleTimeString());
    var update = setInterval(actualizarReloj, 1000);

    setTimeout(actualizarReloj, 5000);
    cerrarVentana();
  }
  function cerrarVentana() {
    setInterval(nuevaVentana.close, 10000);
  }
}
