function cambiarColor() {
  if (window.document.body.style.backgroundColor == "orange") {
    window.document.body.style.backgroundColor = "blue";
  } else window.document.body.style.backgroundColor = "orange";
}

var tempo = setInterval(cambiarColor, 1000);

function detener() {
  clearInterval(tempo);
}
