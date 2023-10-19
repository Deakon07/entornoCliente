segundaVentana = () => {
  segundaVentana = window.open("", "segundaVentana", "height=300, width=700");
  numero = segundaVentana.prompt("Introduzca un número del 1 al 20");
  segundaVentana.close();
  var numero;
  for (var i = 1; i <= numero; i++) {
    window.document.write(`<ul><li>${i}</li></ul>`);
  }
};

segundaVentana();
