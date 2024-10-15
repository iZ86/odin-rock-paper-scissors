

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

/** Starts the game of 5 rounds of rock-paper-scissors. */
function playGame() {
	// The score of the human.
	let humanScore = 0;
	// The score of the computer.
	let computerScore = 0;

	/** Plays one round of rock paper scissors. */
	function playRound(humanChoice, computerChoice) {
		humanChoice = humanChoice.toLowerCase();
		computerChoice = computerChoice.toLowerCase();
		if ((humanChoice === "rock" && computerChoice === "scissors") 
			|| (humanChoice === "paper" && computerChoice === "rock") 
			|| (humanChoice === "scissors" && computerChoice === "paper")) {
				
				humanScore++;
				console.log("You Win! " + humanChoice + " beats " + computerChoice);
		} else if ((computerChoice === "rock" && humanChoice === "scissors") 
			|| (computerChoice === "paper" && humanChoice === "rock") 
			|| (computerChoice === "scissors" && humanChoice === "paper")) {
				
				computerScore++;
				console.log("You lose! " + computerChoice + " beats " + humanChoice);
		} else if ((humanChoice === computerChoice)) {
			console.log("It's a tie!");
		} else {
			console.log("What did you choose!?");
		}
	}


	for (let i = 0; i < 5; i++) {
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice);
	}

	
	if (humanScore > computerScore) {
		console.log("You won! You won " + humanScore + " times! The computer won " + computerScore + " times!");
	} else if (humanScore < computerScore) {
		console.log("You lost! You won " + humanScore + " times! The computer won " + computerScore + " times!");
	} else {
		console.log("It's a tie! You won " + humanScore + " times! The computer won " + computerScore + " times!")
	}
	
}

playGame();
