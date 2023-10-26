const M = 5;
const N = 15;
creaMatriz = () => {
  var arr = Array(M)
    .fill()
    .map(() => Array(N));
};

pintaTabla = () => {};


for (i = 0; i < M; i++) {
  document.write("1");
    for (j = 0; j<N ; j++) {
      if(i==0){
        document.write(" 1");
      }else if(j==N-1){
    document.write(" 1");
    }else if(j<=N && i<5){
      document.write(" 0");
    }else if(j==1){
      document.write(" 1");
    }
  }
    document.write("<br>");
}


