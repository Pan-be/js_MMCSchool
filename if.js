// const x = 50
// const y = 60

// if (x > y) {
//     console.log(`${x} jest większe niż ${y}`);
// } else if (x < y) {
//     console.log(`${x} jest mniejsze niż ${y}`);
// }

// const color = 'blue'
// const newColor = 'blue'

// if (color === newColor) {
//     console.log('kolory się zgadzają');
// } else if (color !== newColor) {
//     console.log('kolory się nie zgadzają');
// }

// const x = 100
// const y = 500

// if (x > y) {
//     console.log('x większe');
// } else if (x == y) {
//     console.log('równe');
// } else if (x < y) {
//     console.log('y większe');
// }


//operator warunkowy

// const x = 5

// const newX = x%2 === 0 ? 'x jest parzyste' : 'x jest nieparzyste'

// console.log(newX);

const x = 10
let text

if (x >= 100) {
    text = 'x > 100'
} else if (x < 100 && x > 30) {
    text = 'x jest średniakiem'
} else if (x <= 30) {
    text = 'x jest mały'
}

console.log(text.toUpperCase());