const numOfRounds = 5;
let computer = 0;
let player = 0;

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const rand = choices[Math.floor(Math.random() * choices.length)];
  return rand;
}

function finalScore() {
  const winner =
    player > computer
      ? `You won! Score: Player - ${player}, Computer - ${computer}`
      : `You lost! Score: Player - ${player}, Computer - ${computer}`;
  document.getElementById('score').innerHTML = winner;
}

function playRound(playerSelection, computerSelection) {
  const win = `${playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1)} beats ${computerSelection}.`;
  const lose = `${computerSelection.charAt(0).toUpperCase() +
    computerSelection.slice(1)} beats ${playerSelection}.`;
  const tie = "It's a tie! Try again.";
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      player += 1;
      return `${win}`;
    }

    if (computerSelection === 'paper') {
      computer += 1;
      return `${lose}`;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      player += 1;
      return `${win}`;
    }

    if (computerSelection === 'scissors') {
      computer += 1;
      return `${lose}`;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      player += 1;
      return `${win}`;
    }

    if (computerSelection === 'rock') {
      computer += 1;
      return `${lose}`;
    }
  }
  return tie;
}

let playerSelection;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'rock') {
      playerSelection = 'rock';
    } else if (button.id === 'paper') {
      playerSelection = 'paper';
    } else if (button.id === 'scissors') {
      playerSelection = 'scissors';
    }
    document.getElementById('results').innerHTML = playRound(playerSelection, computerPlay());
    if (computer === numOfRounds || player === numOfRounds) {
      document.getElementById('rock').disabled = true;
      document.getElementById('paper').disabled = true;
      document.getElementById('scissors').disabled = true;
      finalScore();
    } else {
      document.getElementById('score').innerHTML = `Score: Player - ${player}, Computer - ${computer}`;
    }
  });
});
