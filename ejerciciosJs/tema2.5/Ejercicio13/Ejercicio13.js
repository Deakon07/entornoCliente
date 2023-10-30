let menu = { 
    width: 200, 
    height: 300, 
    title: "Mi menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu){
    for (let i in menu) { 
        if(typeof menu[i] == "number"){
            menu[i]= menu[i]*2;
        }
    }
    console.log(menu);
};


