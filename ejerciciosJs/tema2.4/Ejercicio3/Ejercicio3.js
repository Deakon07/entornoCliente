var numeroAleatorio;

let par = (numeroAleatorio) => {
  if (numeroAleatorio % 2 == 0) {
    return document.write(`<p>Este numero: ${numeroAleatorio} es par</p>`);
  }
  return document.write(`<p>Este numero: ${numeroAleatorio} es impar</p>`);
};

for (let i = 0; i < 500; i++) {
  numeroAleatorio = Math.floor(Math.random() * 10001);
  par(numeroAleatorio);
}
