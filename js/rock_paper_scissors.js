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

