function exercicio07(){
    let numerosInteiros = [];
    let soma = 0;
    for(let i = 0; i <= 9;i++){
        numerosInteiros[i] = parseInt(prompt("Digite um numero inteiro: "));
        soma = soma+numerosInteiros[i];
    }
    let media = soma/10;
    alert("A média é de: " + media);
}