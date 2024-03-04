/* || GETTERS AND SETTERS || */

//getter =special method that makes a property readable
//setter = special method that makes a property writable
//validate and modify a value when reading/writing a property

class Person {
    constructor() {
        this.firstName = "Jeena",
            this.lastName = "Stanly"
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        let myName = value.split(" ");
        this.firstName = myName[0];
        this.lastName = myName[1];

    }
};
const person = new Person();
console.log(person.fullName);
person.fullName = "emil john";
console.log(person.fullName);

class Square {
    constructor(a) {
        this.side = a;
    }
    get area() {
        let area = this.side * this.side;
        return `Area = ${area}`;
    }
    set area(area) {
        this.side = Math.sqrt(area);
        console.log(this.side);
    }
};
const mySquare = new Square(5);
console.log(mySquare.area);
mySquare.area = 900;
console.log(mySquare.area);


