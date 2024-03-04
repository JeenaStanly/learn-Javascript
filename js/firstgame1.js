let playGame = confirm("Shall we play a game?")
console.log(playGame);
if (playGame) {
    let playerChoice = prompt("Enter your choice from\n1.rock\n2.paper\n3.scissors");
    console.log(playerChoice);
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        console.log(playerOne);
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            console.log(computerChoice);
            let computer = computerChoice === 1 ? "rock" :
                computerChoice === 2 ? "paper" : "scissors";
            console.log(computer);
            let result =
                playerOne === computer ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nIts a tie game`
                    : playerOne === "rock" && computer === "paper" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins` :
                        playerOne === "paper" && computer === "scissor" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins` : playerOne === "scissors" && computer === "rock" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins` : `PlayerOne: ${playerOne}\nComputer: ${computer}\n playerOne Wins`;
            alert(result);
            let playAgain = confirm("Play Again") ? location.reload() : alert("Thanks for playing");

        } else {
            alert("Choose your correct option");
            let chooseOption = location.reload(); // Location.reload is used to reload the site again
        }

    } else {
        alert("I think you changed your mind,see you next time!")

    }

} else {
    alert("Maybe Later");
}
