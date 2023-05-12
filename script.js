function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random()*choice.length)];
    return random;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore +=1;
      return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore +=1;
    return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore +=1;
      return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore +=1;
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore +=1;
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      playerScore +=1;
      return "You Win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
      return "Its a Draw!";
      
    } 
  }
 
  function game() {
    while (playerScore < 5 && computerScore < 5) {
      let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
      let computerSelection = getComputerChoice();
      alert(playRound(playerSelection, computerSelection));
    }
    if (playerScore == 5) {
      return "You win the game";
    } else if (computerScore == 5) {
      return "You lose the game";
    }
  }

  let playerScore = 0;
  let computerScore = 0;
  console.log(game())


  
  
   

  
  