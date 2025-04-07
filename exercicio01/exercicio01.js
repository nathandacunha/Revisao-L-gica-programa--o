function exercicio01(){
    let macas = parseFloat(prompt("Quantas maçãs você quer comprar? "));

    if (macas < 12){
        let total = macas*2.3;
        alert("O preço total da compra é de: " + total);
    } else {
        let total = macas*1.95;
        alert("O preço total da compra é de: " + total);
    }
}