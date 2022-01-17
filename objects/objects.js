const myObject = {
    name: 'Konrad',
    age: 32,
    car: {
        brand: 'Peugeot',
        model: '2008',
        voice () {
            console.log('brum brum');
        }
    }
}

myObject.car.voice()

// myObject.country = 'Polska'

// console.log(myObject);
// console.log(myObject.name);

// console.log(`${myObject.name} ma ${myObject.age} lata i jeździ samochodem marki ${myObject.car.brand}, model ${myObject.car.model}.`);

// console.log(myObject.country);

// const dogName = 'Borys'
// const dogAge = 11

// const dog = {
//     dogName,
//     dogAge
// }

// dog['bread-of-dog'] = 'kundel'

// console.log(dog);