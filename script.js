function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let random = choice[Math.floor(Math.random()*choice.length)];
    return random;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You Win! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "You Win! Paper beats Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "You Win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
      return "Its a Draw!";
      
    } 
  }

  let playerSelection = prompt ("Rock, Paper or Scissors?");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
   

  
  