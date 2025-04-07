function exercicio02(){
    let numero1 = parseInt(prompt("Digite um número: "))
    alert("O valor do numero 01 é: \n" + numero1);
    let numero2 = parseInt(prompt("Digite mais um número: \n"));
    alert("O valor do segundo número é de: \n" + numero2);

    if (numero1 > numero2) {
        alert("O primeiro numero é maior que o segundo \n" + numero1);
    } else if (numero1 == numero2) {
        alert("Os dois valores são iguais: \n" + numero1 + numero2);
    } else {
        alert("O segundo valor é maior que o primeiro \n" + numero2);
    }
}