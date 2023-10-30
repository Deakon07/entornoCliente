let factura = {
  numero: 1,
  cliente: "Fran",
  divisa: "€",
  subtotal: 5000,
  iva: 0.21,
  calcularTotal: function () {
    return this.subtotal * this.iva;
  },
};
console.log(
  `La factura nº: ${
    factura.numero
  } tiene un importe de ${factura.calcularTotal()} ${factura.divisa}`
);
