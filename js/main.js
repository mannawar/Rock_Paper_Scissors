//Grabbing all DOM elements
const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const restart = document.getElementById('restart');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
}

//Play game
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

//Function computer choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    }
    else if(rand <= 0.67) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

//Get Winner
function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    }
    else if(p === 'rock') {
        if( c === 'paper') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if( p === 'paper') {
        if( c === 'scissors') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if ( p === 'scissors') {
        if(c === 'rock') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else {
        return 'player';
    }
}

//Show Winner
function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        //Increment player score
        scoreboard.player++;
        //output the result
        result.innerHTML = `
        <h1 class="text-win">You Won</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    }
    else if (winner === 'computer') {
        //Increment computer score
        scoreboard.computer++;
        //output the result
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    }
    else {
        //output the result
        result.innerHTML = `
        <h1>It's a draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;  
    }
    //show score
    score.innerHTML = `
    <p>Player-Score: ${scoreboard.player}</p>
    <p>Computer-Score: ${scoreboard.computer}</p>
    `;

    //resetting modal class for display
    modal.style.display = 'block';
}

//Restart Game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

//Close Modal
function closeModal(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', closeModal);
restart.addEventListener('click', restartGame);
