function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);

    switch(randomNumber) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
        default:
            'Erro na geração de um numero random'
    }
}