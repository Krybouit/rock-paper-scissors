function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let random = choice[Math.floor(Math.random()*choice.length)];
    return random;
  }