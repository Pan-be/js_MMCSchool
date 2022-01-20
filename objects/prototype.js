function User(name, age) {
    this.name = name
    this.age = age
}

const newUser = new User('Janusz', 60)
const newUser2 = new User('Sławomir', 48)
const newUser3 = new User('Bogdan', 61)

User.prototype.hello = function () {
    console.log(`Cześć ${this.name}`);
}

newUser3.hello()