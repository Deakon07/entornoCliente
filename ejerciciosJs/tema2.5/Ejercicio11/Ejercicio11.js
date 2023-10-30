let punto = {};

let punto2 = {
  nombre: "Scott",
  color: "Cafe",
  edad: 5,
  macho: true,
};

isEmpty = () => {
  for (let i in punto) {
    if (punto == undefined) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
};

isEmpty();
