class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log(`Zwierzak robi "hau hau".`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    sound() {
        console.log('Kotek robi "miau"');
    }
}

const dog = new Dog('Borys', 11)
const cat = new Cat('Zuzia')

dog.sound()
cat.sound()

console.log(dog);