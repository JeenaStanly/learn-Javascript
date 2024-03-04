/* || SUPER CLASS || */

class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    get crustNew() {
        return this.crust;
    }
    set crustNew(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}
const myPizza = new Pizza("small");
console.log(myPizza.size);
console.log(myPizza.crust);
console.log(myPizza.crustNew);
myPizza.crustNew = "thick";
console.log(myPizza.crustNew);
console.log(myPizza.crust);

//making a child class

class specialPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);//here this child class has all the properties of its super class by calling super();
        this.type = "Dominoz";

    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has more then 8 slices`);
    }
}
const specialPizza1 = new specialPizza("medium");
specialPizza1.slice();

/* || FACTORY FUNCTION|| */

function pizzaFactory(pizzaSize) {
    const size = pizzaSize;
    const crust = "thin";
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}
const myPizza1 = pizzaFactory("small");
myPizza1.bake();
