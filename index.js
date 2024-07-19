// Variables For Player Score and Computer Score
let humanScore = 0;
let computerScore = 0;

const body = document.querySelector('body');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const div = document.createElement('div');
const divScore = document.createElement('div');
const header3 = document.createElement('h3');

rockButton.id = 'rock-button';
rockButton.value = 'rock';
rockButton.textContent = 'Rock'
paperButton.value = 'paper';
paperButton.id = 'paper-button';
paperButton.textContent = 'Paper'
scissorsButton.value = 'scissors';
scissorsButton.id = 'scissors-button';
scissorsButton.textContent = 'Scissors';

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

body.appendChild(divScore);
body.addEventListener('click', (e) => {
    if (humanScore < 5 || computerScore < 5) {
        let computerSelection = getComputerChoice();
        playRound(e.target.value, computerSelection);
        updateScoreDiv();
    }
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            header3.textContent = `You won ${humanScore} : ${computerScore}`;
            divScore.prepend(header3);
        } else if (humanScore < computerScore) {
            header3.textContent = `You lost ${humanScore} : ${computerScore}`;
            divScore.prepend(header3);
        }
        humanScore = 0;
        computerScore = 0;
    }
})


function updateScoreDiv() {
    divScore.innerText = `Score: You:${humanScore} Computer:${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        div.innerText = 'Draw';
        body.appendChild(div);
        return

    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        div.innerText = 'You lose! Paper beats Rock';
        body.appendChild(div);
        return

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        div.innerText = 'You Win! Rock beats Scissors';
        body.appendChild(div);
        return

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        div.innerText = 'You Win! Paper beats Rock';
        body.appendChild(div);
        return

    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        div.innerText = 'Draw';
        return

    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        div.innerText = 'You lose! Scissors beats Paper';
        body.appendChild(div);
        return

    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        div.innerText = 'You lose! Rock beats Scissors';
        body.appendChild(div);
        return

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        div.innerText = 'You win. Scissors beats Paper';
        body.appendChild(div);
        return

    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        div.innerText = 'Draw';
        body.appendChild(div);
        return
    }
}

function generateComputerChoice() {
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

function generateHumanChoice() {
    let humanChoice = '';
    do {
        humanChoice = prompt('Choose one: rock, paper, scissors');
    } while (humanChoice.toLowerCase() != 'rock' && humanChoice.toLowerCase() != 'paper' && humanChoice.toLowerCase() != 'scissors');

    return humanChoice;
}