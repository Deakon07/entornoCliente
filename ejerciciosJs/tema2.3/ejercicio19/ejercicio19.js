var nuevaVentana;
function abrirVentana() {
  nuevaVentana = window.open(
    "selector_color.html",
    "selectorColor",
    "toolbar=no,location=no,menubar=no,width=300px,height=300px"
  );
}

var color1;
function cambiarColor() {
  // para cambiar el color, coge el id o el nombre (name) del formulario
  color1 = formularioColor.colours.value;
  window.opener.document.body.style.background = color1;
  window.close();
}
