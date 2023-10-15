function abrirPagina() {
  window.open("datos.html", "datos");
}

function datosPadre() {
  window.open("window.html", "padre");
  window.opener.document.write(escribirEnPadre.nombre.value + " " + escribirEnPadre.apellidos.value +"<br>");
  var fechaUsuario = new Date(escribirEnPadre.FechaNacimiento.value);
  window.opener.document.write(`${fechaUsuario.getDate()} / ${fechaUsuario.getMonth()+1} / ${fechaUsuario.getFullYear()} <br>`);
  var fechaActual = new Date();
  var anoActual= fechaActual.getFullYear();
  
  window.opener.document.write("Los años bisiestos  entre tu fecha de nacimiento y el año actual son:<br>");

  for (let i = fechaUsuario.getFullYear(); i <= anoActual; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
    window.opener.document.write(i + "<br>");
  }
}
}
