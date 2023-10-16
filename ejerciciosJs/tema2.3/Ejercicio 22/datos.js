function abrirPagina() {
  window.open("datos.html", "datos");
}

function datosPadre() {
  var nombre = escribirEnPadre.nombre.value;
  var apellido = escribirEnPadre.apellidos.value;
  var fechaUsuario = new Date(escribirEnPadre.FechaNacimiento.value);
  var fecha = fechaUsuario.toLocaleDateString();

  var todo = `${nombre} ${apellido} ${fecha}`;

  var anos = "";
  for (let i = fechaUsuario.getFullYear(); i <= anoActual; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      anos = anos + " " + i + "<br>";
    }
  }
  window.opener.document.getElementById("p1").innerHTML =
    todo +
    "Los años bisiestos entre tu fecha de nacimiento y el año actual son:<br>" +
    anos;
}
