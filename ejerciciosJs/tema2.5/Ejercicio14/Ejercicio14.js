let cliente ={
    nombre: "Fran",
    email: "worklet@gmail.com",
    direccion: {
    calle:"C/Trabajo",
    num: 12,
    ciudad: "Sevilla"
}
}

for ( i in cliente.direccion ) {
    cliente.direccion= "madrid";
    
}
console.log(cliente);
