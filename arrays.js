//const numbers = [1,2,3,4,5]

// console.log(numbers);

// numbers.unshift(-1, 0)
// // unshift adds in the beggining
// console.log(numbers);

// numbers.shift()
// //shift deletes first element (just one!)
// console.log(numbers);

// numbers.push(6,7)
// //push adds in the end
// console.log(numbers);

// numbers.pop()
// //pop deletes last element (just one!)
// console.log(numbers);

// function multiply(x) {
//     return x * 2
// }

// //console.log(multiply(2));

// const newNumbers = numbers.map(multiply)
// console.log(numbers);
// console.log(newNumbers);
// //map - destructive method

// const abc = ['a', 'b', 'c']

// const newArr = numbers.concat(abc)

// console.log(newArr);

// const drinks = ['pepsi', 'kawa', 'sok']
// const meals = ['schabowy', 'spaghetti', 'zupa']

// const menu = drinks.concat(meals)

// console.log(...menu);

const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0, 2)
console.log(numbers2);

const numbers3 = numbers.slice(-3)
console.log(numbers3);

const randomStuff = colors.slice(-2)
console.log(randomStuff);

const newCars = cars.splice(2, 4, 'test')
console.log(cars);
console.log(newCars);

console.log(cars.indexOf('fiat'));
//indexOf - if return -1 - value doesn't exist