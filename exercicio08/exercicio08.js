function exercicio08(){
    let num = Array(2, 3)
    let x, y;
    for (x = 0; x < 2; x++){
        for(y = 0; y < 3; y++){
            num[x, y] = parseFloat(prompt("Digite o " + [y+1] + " numero da " + [x+1] + " coluna"));
        }
    }
   
    
}