/* || NESTED ARRAY POSITIONING|| */

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golfball", "tennisball"];

const clothesShelfA = ["tank-tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat-tops", "sweat-pants", "hoodies"];
//positioning one dimensional array
console.log(equipShelfA[1]);
console.log(clothesShelfB[2]);

//positioning two dimensional array
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
console.log(equipDept[0][1]);
console.log(equipDept[0][1]);
console.log(clothesDept[0][0]);
console.log(clothesDept[1][2]);

//positioning three dimensional array
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);
console.log(sportsStore[0][1][2]);
console.log(sportsStore[1][1][0]);
