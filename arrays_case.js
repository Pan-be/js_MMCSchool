// const letters = ['c', 'd']

// letters.unshift('a', 'b')
// letters.push('e', 'f')

// console.log(letters)

// const searchLetter = letters.indexOf('c')

// if (searchLetter > -1) {
//     console.log('tablica zawiera literę c');
// } else {
//     console.log('tablica nie zawiera litery c')
// }

// const numbers = [1, 2, 3]
// const meal = ['burger', 'pizza', 'kebab']

// // const newArr = numbers.concat(meal)

// const newArr = [...numbers, ...meal]

// console.log(newArr);

// const numbers = [1, 5, 13, 26, 48]

// function multiply(x) {
//     return x * 5
// }
// const newNumbers = numbers.map(multiply)

// console.log(newNumbers);

// for (const element of newNumbers) {
//     if (element % 2 === 0) {
//         console.log(`Liczba ${element} jest parzysta`);
//     } else {
//         console.log(`Liczba jest ${element}  nieparzysta`);
//     }
// }

// const colors = ['grey']

// colors.unshift('blue')
// colors.push('red')

// console.log(colors);

// for (let i=0; i < colors.length; i++) {
//     //console.log(`Mój ulubiony kolor to ${colors[i].toUpperCase()}`);
//     console.log(`Mój ulubiony kolor to ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`)
// }

const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'

const carsArr = cars.split(', ')
//console.log(carsArr);

if (carsArr.length > 3) {
    console.log('Jest Ok');
} else {
    console.log('Nie jest Ok');
}

if (carsArr.includes('Audi') === true) {
    carsArr.push('Fiat')
} else {
    carsArr.pop()
}

console.log(carsArr);