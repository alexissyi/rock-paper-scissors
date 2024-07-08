let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  index = Math.floor(Math.random() * 3);
  return choices[index];
}

function getHumanChoice() {
  choice = prompt("Choose rock, paper or scissors: ");
  choices = new Set(["rock", "paper", "scissors"]);
  if (!choices.has(choice.toLowerCase())) {
    alert("Invalid.");
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  choiceMap = new Map([
    ["rock", 0],
    ["paper", 1],
    ["scissors", 2],
  ]);
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("Draw! You both played " + humanChoice + ".");
  } else if (
    (choiceMap.get(humanChoice) - choiceMap.get(computerChoice) + 3) % 3 ===
    1
  ) {
    humanScore += 1;
    console.log(
      `You win! ${
        humanChoice[0].toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}`
    );
  } else {
    computerScore += 1;
    console.log(
      `You lose! ${
        computerChoice[0].toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}`
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  if (computerScore === humanScore) {
    console.log(`Draw. You each won ${humanScore} points`);
  } else if (computerScore > humanScore) {
    console.log(
      `You lose. The computer won ${computerScore} points, you won ${humanScore} points.`
    );
  } else {
    console.log(
      `You win. You won ${humanScore} points, the computer won ${computerScore} points.`
    );
  }
}

playGame();
