const user = {
    name: 'Ewelina',
    age: 32
}

const pet = {
    name: 'Ramzes',
    type: 'dog'
}

const userInfo = Object.assign({}, user, pet)

// console.log(user);
// console.log(pet);
// console.log(userInfo);

const userCopy = Object.assign({}, user)

userCopy.age = 33

console.log(userCopy);
console.log(user);