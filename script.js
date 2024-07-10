let humanScore = 0;
let computerScore = 0;
let playing = true;

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
    displayOutput("Draw! You both played " + humanChoice + ".");
  } else if (
    (choiceMap.get(humanChoice) - choiceMap.get(computerChoice) + 3) % 3 ===
    1
  ) {
    humanScore += 1;
    displayOutput(
      `You win! You chose ${humanChoice}, the computer chose ${computerChoice}. ${
        humanChoice[0].toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}.`
    );
  } else {
    computerScore += 1;
    displayOutput(
      `You lose! You chose ${humanChoice}, the computer chose ${computerChoice}. ${
        computerChoice[0].toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}.`
    );
  }
  if (humanScore === maxScore || computerScore === maxScore) {
    console.log("IN END GAME LOGIC");
    playing = false;
    let winner;
    if (humanScore > computerScore) {
      winner = "you";
    } else {
      winner = "the computer";
    }
    displayOutput(`Game over! The final winner is ${winner}.`);
  }
}

function displayOutput(output) {
  display.textContent = output;
  computerScoreDisplay.textContent = computerScore;
  humanScoreDisplay.textContent = humanScore;
}

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
  const button = event.target;
  const humanChoice = button.id;
  if (humanChoice !== "buttons" && playing) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
});

function displayComputerScore() {}

const computerScoreDisplay = document.querySelector("#computer-score");
const humanScoreDisplay = document.querySelector("#human-score");

const maxScore = 5;

const display = document.querySelector("#output");
