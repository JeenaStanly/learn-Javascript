/* || Public Private Classes || */

//while declaring a class you sould set the public and privete property outside the constructor if it is private use '#property'

class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    hereYouGo() {
        console.log(`here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();