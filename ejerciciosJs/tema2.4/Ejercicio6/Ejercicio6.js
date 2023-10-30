finDeSemana = () => {
  let fecha = new Date();
  if (fecha.getDay == 0 || fecha.getDay == 6) {
    window.open("", "ventana", "height=400, width=400");
    document.write("<img src='./images/feliz.JPG'></img>");
  } else document.write("<img src='./images/infeliz.JPG'></img>");
};
