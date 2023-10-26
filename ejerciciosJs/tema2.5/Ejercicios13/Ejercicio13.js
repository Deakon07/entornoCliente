let menu = { 
    width: 200, 
    height: 300, 
    title: "Mi menu"
};

multiplyNumeric=(menu)=>{
    for (let i in menu) { 
        if(!isNaN(i)){
          i=  i*2;
        }
    }
    console.log(menu);
};

multiplyNumeric(menu);

