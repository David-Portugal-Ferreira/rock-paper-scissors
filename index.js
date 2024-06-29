// Variables For Player Score and Computer Score
let humanScore = 0;
let computerScore = 0;









// Generate computer choice
function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);

    switch (randomNumber) {
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

// Takes player choice
function getHumanChoice() {
    let humanChoice = '';
    /* do { */
        humanChoice = prompt('Choose one: rock, paper, scissors');
    /* }
    while (humanChoice != 'rock' || humanChoice != 'paper' || humanChoice != 'scissors') */

    return humanChoice;
}