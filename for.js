// for (let i=0; i <= 3; i++) {
//     console.log(i);
// }

// const color = ['green', 'blue', 'yellow', 'grey', 'red']

// for (let i=0; i < color.length; i++){
//     console.log(color[i]);
// }

// const cities = ['Warsaw', 'Boston', 'Pekin', 'Sydney']

// for (let i=0; i < cities.length; i++) {
//     console.log(`To miasto nazywa się ${cities[i]}`);
// }


// let x = 0;

// while (x < 10) {
//     //x = x + 2
//     x += 2
//   console.log(x)
  
// }

// let x = 20

// do {
//     x -= 3
// } while (x > 0)

// console.log(x);

let array = [5, 8, 10, 23, 48, 60]

for (const element of array) {
    console.log(element/5);
}

for (const element of array) {
    if (element % 2 === 0) {
        console.log(`Liczba ${element} jest parzysta`);
    } else {
        console.log(`Liczba jest ${element}  nieparzysta`);
    }
}

