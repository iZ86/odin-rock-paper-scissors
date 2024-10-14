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

