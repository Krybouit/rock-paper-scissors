function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random()*choice.length)];
    return random;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You Win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
      return "Its a Draw!";
      
    } 
  }
 
  let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
   

  
  