/* || CLASASES || */

//classes are used to create one or more objects.classes are created with properties an methods which is reusable when we create new objects.

class Rectangle {
    // the constructor is used to setup the object with instance properties and methods
    constructor() {
        console.log("the rectangle has been created");
        this.width = 5;
        this.height = 6;
        this.color = "blue";

    }
}
const myRectangle = new Rectangle();
//how to set parameters in constructor to make a custom made objects

class Rectangle1 {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getArea() {
        return this.width * this.height;
    }
    printDescription() {
        console.log(`i am a rectangle of ${this.width}* ${this.height} and i am ${this.color}`)
    }

}
const myRectangle1 = new Rectangle1(10, 6, "red");
console.log(myRectangle1.getArea());
myRectangle1.printDescription();

class pizza {
    constructor(size, type, crust) {
        this.size = size;
        this.type = type;
        this.crust = crust;
    }
    bake()//its a method
    {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    };

}
const myPizza = new pizza("small", "pepperoni", "thin")
myPizza.bake();

//Getter and Setter

class Square {
    constructor(_side) {
        this.side = _side;
        this.numberOfRequestForArea = 0;
    }
    get area() {
        return this.side * this.side;
    };
    set area(area) {
        this.side = Math.sqrt(area);
        console.log(this.side);
    }
}
const mySquare = new Square(5);
console.log(mySquare.area);
mySquare.area = 100;
console.log(mySquare.area);

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get displayProduct() {// by adding get to a method it acts like a property
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);

    }
    get calculateTotal() {
        return (this.price + (this.price * salesTax)).toFixed(2);
    }
}
const salesTax = 0.05;
const product1 = new Product("shirt", 24);
product1.displayProduct;
console.log(product1.calculateTotal);
const product2 = new Product("pants", 30);
product2.displayProduct;
const total = product2.calculateTotal;
console.log(`Price(with tax): $${total}`);