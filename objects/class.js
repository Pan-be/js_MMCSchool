//zwykły konstruktor
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayHi = function() {
    console.log(`Cześć, jestem ${this.name}.`);
}

Person.prototype.showAge = function() {
    console.log(`Mam ${this.age} lata.`);
}

const person1 = new Person('Janek', 5)

person1.sayHi()
person1.showAge()
//----------------------------
//klasa
class Person2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    sayHi(){
        console.log(`Cześć, jestem ${this.name}.`);
    }

    showAge() {
        console.log(`Mam ${this.age} lata.`);
    }
}

const person2 = new Person2('Stanisław', 2)

person2.sayHi()
person2.showAge()

//-----------------------
function Meal(name, price) {
    this.name = name
    this.price = price
}

Meal.prototype.menuPos1 = function (){
    console.log(`${this.name} kosztuje ${this.price}`);
}

const food1 = new Meal('Hamburger', 25)

food1.menuPos1()
//----------------------------
class Meal2 {
    constructor(foodName, foodPrice) {
        this.foodName = foodName
        this.foodPrice = foodPrice
    }

    menuPos2() {
        console.log(`${this.foodName} kosztuje ${this.foodPrice}`);
    }
}

const food2 = new Meal2('Pizza', 39)

food2.menuPos2()