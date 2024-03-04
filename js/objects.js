/* || OBJECTS || */

//objects includes key-value pairs ie;properties and methods within the curly braces

const myObjct = { name: "jeena" };
console.log(myObjct);
const anotherObject = {
    fName: "jeena",
    alive: true,
    age: 29,
    hobbies: ["reading", "writing", "sleeping"],
    beverages: {
        morning: "Tea",
        evening: "coffee"
    },
    action: function () { //this is a method in an object
        return "Hello World"
    },
    reminder: function () {
        return `time for ${this.beverages.morning}`; //here 'this' indicates the object.
    }
}
console.log(anotherObject.fName);
console.log(anotherObject.alive);
console.log(anotherObject.hobbies);
console.log(anotherObject.hobbies[2]);
console.log(anotherObject.beverages);
console.log(anotherObject.beverages.morning);
console.log(anotherObject.reminder());
console.log(anotherObject.action());


// Object Inheritance
const vehicle = { //created an object called vehicle
    wheels: 4,
    engine: function () {
        return "vroom"
    }
};
console.log(vehicle.engine());

const car = Object.create(vehicle);//here we create objects using constructor method 'Object.create'
car.doors = 4;
car.engine = function () {
    return "whoosh!";
}//here we override the inherited property engine from 'vroom' to 'whoosh!'
console.log(car);
console.log(car.wheels);//here we get the output 4 because it inheritance the properties of object "vehicle"
console.log(car.engine);//returns the object property 'engine'
console.log(car.engine());//returns the output of the function

const tesla = Object.create(car);
tesla.engine = function () {
    return "shhhh....";
}
console.log(tesla.engine());
console.log(tesla.wheels);//here we get the answer 4 since it inherit all the properties from 'car' and car inherit the properties from 'vehicle'

const band = {
    vocals: "jeena stanly",
    guitar: "emil john",
    bass: "anoop john",
    drums: "peter parker"
};
console.log(Object.keys(band));//object.keys return an array of keys in that object
console.log(Object.values(band));//object.values return an array of values in that object
for (let job in band) {
    console.log(`on ${job},it's ${band[job]}`);
}
const vehicles = {
    car: 4,
    truck: 4,
    auto: 3,
    cycle: 2
};
console.log(Object.keys(vehicles));
console.log(Object.values(vehicles));
for (let wheels in vehicles) {
    console.log(wheels);
    console.log(`${wheels} has ${vehicles[wheels]} wheels`);
}

//how to add extra properties into an object

vehicles.lorry = 6;
console.log(vehicles);
for (let wheels in vehicles) {

    vehicles.statement = function () {
        return `i bought a ${wheels}.`;
    }
    console.log(vehicles.statement());
}

//how to delete a property from an object

delete vehicles.auto;
console.log(vehicles);
console.log(vehicles.hasOwnProperty("cycle"));//hasOwnProperty used to check if the property is present or not
console.log(vehicles.hasOwnProperty("auto"));

//Destructuring objects

const { guitar: myVariable, vocals: myVocal } = band;
console.log(myVariable);
console.log(myVocal);
//or you can just put keys in there

const { guitar, vocals, bass } = band;
console.log(guitar);
console.log(vocals);
console.log(bass);

band.sing = function () {
    return `${vocals} sings!`
}
console.log(band.sing())
//other way of doing this using destructive object

function sings({ guitar }) {
    return `${guitar} will play the guitar`
}
console.log(sings(band));
function sold({ car }) {
    return `we sold the car which has ${car} wheels`
}
console.log(sold(vehicles));