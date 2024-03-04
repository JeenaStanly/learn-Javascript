/* First Interactive Game */

let playGame = confirm("Shall we play a game? Rock Paper Scissors");
if (playGame) {
    let playerChoice = prompt("Enter your choice Rock Paper Scissors")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
            let result = playerOne === computer ? `PlayerOne:${playerOne}\n Computer:${computer}\n Tie Game` : playerOne === "rock" && computer === "paper" ? `PlayerOne:${playerOne}\n Computer:${computer}\n computer wins` : playerOne === "paper" && computer === "scissors" ? `PlayerOne:${playerOne}\n Computer:${computer}\n computer wins` : playerOne === "scissors" && computer === "rock" ? `PlayerOne:${playerOne}\n Computer:${computer}\n computer wins` : `PlayerOne:${playerOne}\n Computer:${computer}\n player wins`
            alert(result);
            let playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("Thanks for playing");


        } else {
            alert("Make sure to choose between rock,paper,scissors");
        }
    } else {
        alert("I think you changed your mind ,maybe later");
    }
}
else {
    alert("Ok , maybe next time.😊");
}
