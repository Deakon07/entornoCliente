var suma;
let salarios = {
  John: 100,
  Ann: 160,
  Peter: 130,
  sumaSalarios: function () {
    if (salarios.suma == "") {
      console.log(
        `La suma de todos lo salarios es: ${salarios.sumaSalarios()}`
      );
    } else {
      suma =
        parseInt(salarios.John) +
        parseInt(salarios.Ann) +
        parseInt(salarios.Peter);
      console.log(
        `La suma de todos lo salarios es: ${salarios.sumaSalarios()}`
      );
    }
  },
};
