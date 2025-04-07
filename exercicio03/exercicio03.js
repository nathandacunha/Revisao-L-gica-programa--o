function exercicio03() {
    let ultimoNumero = parseInt(prompt("Digite o último número da placa do seu carro: \n"));
    switch (ultimoNumero){
        case 0:
            alert("Placas com 0 e 5 não podem circular nas segunda-feiras");
            break;
        case 1:
            alert("Placas com 1 e 6 não podem circular nas terças-feiras");
            break;
        case 2: 
            alert("Placas com 2 e 7 não podem circular nas quartas-feiras");
            break;
        case 3:
            alert("Placas com 3 e 8 não podem circular na quinta-feira");
            break;
        case 4:
            alert("Placas  com 4 e 9 não podem circular nas sextas-feiras");
            break;
        case 5:
            alert("Placas com 0 e 5 não podem circular nas segunda-feiras"); 
            break;
        case 6:
            alert("Placas com 1 e 6 não podem circular nas terças-feiras");  
            break;
        case 7:
            alert("Placas com 2 e 7 não podem circular nas quartas-feiras");
            break;
        case 8:
            alert("Placas com 3 e 8 não podem circular na quinta-feira");
            break;
        case 9:
            alert("Placas  com 4 e 9 não podem circular nas sextas-feiras");
            break;
    }
}