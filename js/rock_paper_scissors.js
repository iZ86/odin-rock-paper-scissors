/** The score of the human. */
let humanScore = 0;
/** The score of the computer. */
let computerScore = 0;


/** Randomly generate rock, paper, or scissors and return it.
 * Used by computer.
 */
function getComputerChoice() {
	let choice = (Math.floor((Math.random()) * 100)) + 1;
	if (choice <= 33) {
		return "rock";
	} else if (choice <= 66) {
		return "paper";
	} else {
		return "scissors";
	}

}

/** Prompts user to enter rock or paper or scissors, and returns it. */
function getHumanChoice() {
	let choice = prompt("Please enter rock or paper or scissors");
	return choice;
}

/** Plays one round of rock paper scissors. */
function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();
	if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
		humanScore++;
		console.log("You Win! " + humanChoice + " beats " + computerChoice);
	} else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
		computerScore++;
		console.log("You lose! " + computerChoice + " beats " + humanChoice);
	}
}

