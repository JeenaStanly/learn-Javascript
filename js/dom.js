/* || Document Object Model || */

// By Id
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
//By class
const views = document.getElementsByClassName("view");
console.log(views);
const sameView = document.querySelectorAll(".view");
console.log(sameView);
//By Tag Name
const divs = view1.getElementsByTagName("div");
console.log(divs);
const samedivs = view1.querySelectorAll("div");
console.log(samedivs);
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);