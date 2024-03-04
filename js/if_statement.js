/* || IF STATEMENT */

let testscore = 25;
let grade;
let collegestudent = false;
if (testscore >= 90) {
    grade = "A";
}
else if (testscore >= 80) {
    grade = "B"
}
else if (testscore >= 70) {
    grade = "C"
}
else if (testscore >= 60) {
    grade = "D"
}
else {
    if (collegestudent) {
        grade = "U";
    }
    else {
        grade = "F"

    }
}
console.log(grade);


/* || Rock Paper Scissors Game */

let playerOne = "scissors";
let computer = "paper";
let result;
if (playerOne === computer) {
    result = "it's a tie";
}
else if (playerOne === "rock") {
    if (computer === "paper") {
        result = "computer wins"
    }
    else {
        result = "playerOne wins"
    }
}
else if (playerOne === "paper") {
    if (computer === "scissors") {
        result = "computer wins"
    }
    else {
        result = "playerOne wins"
    }

}
else {
    if (computer === "rock") {
        result = "computer wins"
    }
    else {
        result = "playerOne wins"// keep it in mindthat else expression never have any condition
    }
}

console.log(result);