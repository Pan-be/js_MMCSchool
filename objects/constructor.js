//konstruktor

function User(name, age) {
    this.name = name
    this.age = age
    this.hello = function () {
        console.log(`Cześć ${this.name}`);
    }
}

//nowy obiekt na bazie konstruktora:

const newUser = new User('Janusz', 60)
const newUser2 = new User('Sławomir', 48)

// console.log(newUser, newUser2);

newUser2.hello()