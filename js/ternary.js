/* || TERNARY OPERATOR */

//Syntax
//condition ? ifTrue : ifFalse;

let testscore = 85;
let myGrade =
    testscore > 89 ? "A"
        : testscore > 79 ? "B"
            : testscore > 69 ? "C"
                : testscore > 59 ? "D"
                    : "F";
console.log('my grade is', myGrade);
console.log(myGrade, "is my grade");

// ROck Paper Scissor Game

let player = "scissor";
let computer = "paper";
let result = (player === computer) ? "tie game"
    : (player === "rock" && computer === "paper") ? "computer wins" :
        (player === "scissor" && computer === "rock") ? "computer wins" :
            (player === "paper" && computer === "scissor") ? "computer wins" :
                "player wins the game";
console.log(result);                