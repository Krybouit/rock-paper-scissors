const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");
const roundResult = document.getElementById("roundResult");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const gameWinner = document.getElementById("gameWinner");
const reset = document.getElementById("reset");


rock.addEventListener("click", function() {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
});

paper.addEventListener("click", function() {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
});

scissors.addEventListener("click", function() {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
});


function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = choice[Math.floor(Math.random()*choice.length)];
  return random;
}
 

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection == "paper") {   
    computerScore.dataset.score =  parseInt(computerScore.dataset.score) + 1;
    computerScore.textContent = "computer: " + computerScore.dataset.score;
    roundWinner = "computer";
    game();
    scoreMessage(roundWinner, playerSelection, computerSelection);
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    playerScore.dataset.score =  parseInt(playerScore.dataset.score) + 1;
    playerScore.textContent = "player: " + playerScore.dataset.score;
    roundWinner = "player";
    game();
    scoreMessage(roundWinner, playerSelection, computerSelection);
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    playerScore.dataset.score =  parseInt(playerScore.dataset.score) + 1;
    playerScore.textContent = "player: " + playerScore.dataset.score;
    roundWinner = "player";
    game();
    scoreMessage(roundWinner, playerSelection, computerSelection);
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    computerScore.dataset.score =  parseInt(computerScore.dataset.score) + 1;
    computerScore.textContent = "computer: " + computerScore.dataset.score;
    roundWinner = "computer";
    game();
    scoreMessage(roundWinner, playerSelection, computerSelection);
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    computerScore.dataset.score =  parseInt(computerScore.dataset.score) + 1;
    computerScore.textContent = "computer: " + computerScore.dataset.score;
    roundWinner = "computer";
    game();
    scoreMessage(roundWinner, playerSelection, computerSelection);
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    playerScore.dataset.score =  parseInt(playerScore.dataset.score) + 1;
    playerScore.textContent = "player: " + playerScore.dataset.score;
    roundWinner = "player";
    game();
    scoreMessage(roundWinner, playerSelection, computerSelection);
  } else if (playerSelection === computerSelection) {
    roundWinner = "tie";
    scoreMessage(roundWinner, playerSelection, computerSelection);
  } 
}

function scoreMessage(roundWinner, playerSelection, computerSelection) {
  if (roundWinner === "player") {
    roundResult.textContent = "You Win! " + (playerSelection) + " beats " + (computerSelection);
  } else if (roundWinner === "computer") {
    roundResult.textContent = "You Lose! " + (computerSelection) + " beats " + (playerSelection);
  } else if (roundWinner === "tie") {
    roundResult.textContent = "Its a Tie! " + (computerSelection) + " and " + (playerSelection);
  }
}

function game() {
    if (playerScore.dataset.score === "5") {
      gameWinner.textContent = "You won the game!";
      document.getElementById("rockBtn").disabled = true;
      document.getElementById("paperBtn").disabled = true;
      document.getElementById("scissorsBtn").disabled = true;
    } else if (computerScore.dataset.score === "5") {
      gameWinner.textContent = "you lost the game!";
      document.getElementById("rockBtn").disabled = true;
      document.getElementById("paperBtn").disabled = true;
      document.getElementById("scissorsBtn").disabled = true;
    } 
  }

reset.addEventListener("click", function() {
  playerScore.dataset.score = 0;
  playerScore.textContent = "player: " + playerScore.dataset.score;
  computerScore.dataset.score = 0;
  computerScore.textContent = "computer: " + computerScore.dataset.score;
  pScore = 0;
  cScore = 0;
  document.getElementById("rockBtn").disabled = false;
  document.getElementById("paperBtn").disabled = false;
  document.getElementById("scissorsBtn").disabled = false;
   
})