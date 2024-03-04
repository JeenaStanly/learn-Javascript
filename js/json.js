/* || JSON: Java Script Object Notation|| */

/* JSON is used to send and recieve data.
JSON is a text format that is completely language independent.
meaning JSON is used to send & recieve data in many languages ...not just in javascript. */

const myObj = {
    name: "Jeena",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj); //type will be object

//how to send data using JSON

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);//here the type is string.When we send data using json it convert the type of data into string. Also json never send the methods or functions in an object.

//how to recieve a data using json

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);//type is object


const age = 30;
console.log(age);
console.log(typeof age);

const ageJSON = JSON.stringify(age);
console.log(ageJSON);
console.log(typeof ageJSON);
const recieveAge = JSON.parse(ageJSON);
console.log(recieveAge);
console.log(typeof recieveAge);

//to recieve a data we use method 'JSON.parse()'it convert the type of data fron string to its original datatype.
