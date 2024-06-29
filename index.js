// Variables For Player Score and Computer Score
let humanScore = 0;
let computerScore = 0;

// Function to play the game
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore} ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lost ${humanScore} ${computerScore}`)
    } else {
        console.log(`Draw ${humanScore} ${computerScore}`)
    }

    humanScore = 0;
    computerScore = 0;
}

// Play Round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('Draw');
        return

    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock');
        computerScore++
        return

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        humanScore++
        return

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win! Paper beats Rock');
        humanScore++
        return

    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('Draw');
        return

    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper');
        computerScore++
        return

    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors');
        computerScore++
        return

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win. Scissors beats Paper');
        humanScore++
        return

    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('Draw');
        return
    }
}

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
    do {
        humanChoice = prompt('Choose one: rock, paper, scissors');
    } while (humanChoice.toLowerCase() != 'rock' && humanChoice.toLowerCase() != 'paper' && humanChoice.toLowerCase() != 'scissors');

    return humanChoice;
}