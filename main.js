function computerPlay() {
    let opponent = Math.floor(Math.random() * 3);
    let throwOpponent = ((opponent == 0) ? "Rock" :
    (opponent == 1) ? "Scissors" :
    "Paper");
    return throwOpponent;
}

function playRound() {
  let p = playerSelection
  let c = computerPlay()
  let result = ((p.toUpperCase() == c.toUpperCase()) ? 0 :
  (p.toUpperCase() == "ROCK" && c.toUpperCase() == "PAPER") ? -1 : 
  (p.toUpperCase() == "ROCK" && c.toUpperCase() == "SCISSORS") ? 1 :
  (p.toUpperCase() == "PAPER" && c.toUpperCase() == "ROCK") ? 1 :
  (p.toUpperCase() == "PAPER" && c.toUpperCase() == "SCISSORS") ? -1 : 
  (p.toUpperCase() == "SCISSORS" && c.toUpperCase() == "ROCK") ? -1 :
  (p.toUpperCase() == "SCISSORS" && c.toUpperCase() == "PAPER") ? 1 :
  NaN);
  return result;
}

let playerSelection = 'rock'
let playerScore = 0
let computerScore = 0
let draw = 0

function game(playerSelection) {
  let message = ""
  let round = playRound()

    if (round == 1) {
    if (playerSelection.toUpperCase() == "ROCK") {
      message = "You win! Rock beats Scissors!"
    } else if (playerSelection.toUpperCase() == "PAPER") {
      message = "You win! Paper beats Rock!"
    } else {
      message = "You win! Scissors beats Paper!"
    }
  } else if (round == -1) {
    if (playerSelection.toUpperCase() == "ROCK") {
      message = "You lose! Paper beats Rock!"
    } else if (playerSelection.toUpperCase() == "PAPER") {
      message = "You lose! Scissors beats Paper!"
    } else {
      message = "You lose! Rock beats Scissors!"
    }
  } else if (round == 0){
    message = `It's a draw! You both threw ${playerSelection}`
  } else {
    message = "Unrecognized input. Refresh page."
  }
  updateScore(round)
  //console.log(message)
  finalScore.textContent = message;
}

function updateScore(round) {
  if (playerScore == 5 || computerScore == 5) {
    playerScore = 0
    computerScore = 0
    draw = 0

  }
  if (round == 1) {
    playerScore++
  } else if (round == -1) {
    computerScore++
  } else {
    draw++
  }
  //console.log(`You: ${playerScore} Computer: ${computerScore} Draws: ${draw}`)
  if (playerScore == 5) {
    announceWinner.textContent = `Congratulations! You won the game!`;
    announceWinner.style.color = 'green';
  } else if (computerScore == 5) {
    announceWinner.textContent = `Too bad! The computer won the game!`;
    announceWinner.style.color = 'red';
  } else {
    announceWinner.textContent = '';
  }
  currentScore.textContent = `You: ${playerScore} Computer: ${computerScore} Draws: ${draw}`;

}

const scoreboard = document.querySelector('#scoreboard');

const currentScore = document.createElement('div');
currentScore.classList.add('scoreboard');
currentScore.style.cssText = 'padding-top: 15px;'
currentScore.textContent = `You: ${playerScore} Computer: ${computerScore} Draws: ${draw}`;

const finalScore = document.createElement('p');
finalScore.classList.add('finalScore');

const announceWinner = document.createElement('p');
announceWinner.classList.add('announceWinner');

scoreboard.appendChild(currentScore);
scoreboard.appendChild(finalScore);
scoreboard.appendChild(announceWinner);