/* || SWITCH */

// Syntax //
//switch (expression OR value) {
// case choice1:
//run this code
//break;

// case choice2:
//run this code
// break;

//add as many cases as needed    

//default:
//run this code if no case matches
//no need for a break here

//}

// Rock Paper Scissor Game

let player = "scissor";
let computer = "rock";
switch (player) {
    case computer:
        console.log("tie game");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break;
    case "paper":
        if (computer === "scissor") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }

}





