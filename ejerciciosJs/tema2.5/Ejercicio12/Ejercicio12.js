var suma;
let salarios = { 
  John: 100,
  Ann: 160,
  Peter: 130,
};

var suma=0;
for (let i in salarios) { 
  if (salarios[i]==""){
    console.log (`La suma de todos los salarios es: 0`);
  }else{
    suma=suma+salarios[i];
  }
}
console.log (`La suma de todos los salarios es: ${suma}`);

