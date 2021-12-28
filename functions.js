// function data(name, age) {
//     console.log(`Mam na imię ${name} i mam ${age} lat.`);
// }

// data('Jan', '5')
// //arrowFunction-> nfn
// const data2 = (name, age) => 
// console.log(`Jestem ${name} i mam ${age} lat.`);
//  data2('Stach', 5)

//  const city = miasto =>
//  console.log(`Mieszkam w ${miasto}`);
//  city('Bielsko-Biała')

//  const hello = (name = 'drogi użytkowniku') => console.log(`Cześć ${name}`);

//  hello()

//  const add = (a=5, b=2) => {
//      console.log(a+b);
//  }
//  add()

// let score

// const add = (x, y) => {
//     score =  x + y
//     // if (score % 2 === 0) {
//     //     fun1()
//     // } else {
//     //     fun2()
//     // }
//     score % 2 === 0 ? fun1(): fun2() 
// }

// const fun1 = () => {
//     console.log(`${score} jest parzysta`);
// }

// const fun2 = () => {
//     console.log(`${score} jest nieparzysta`);
// }

// add(8, 6)

// const add = (x, y) => {
//     score = x + y
//     score % 2 === 0 ? fun1(score): fun2(score)
// }

// const fun1 = (a) => {
//     console.log(`${a} jest parzyste`);
// }

// const fun2 = (c) => {
//     console.log(`${score} jest nieparzyste`);
// }

// add(3, 3)

// let celsius
// let temp

// const fahrenheit = (x) => {
//     celsius = x
//     temp = celsius * 1.8 + 32
// }

// fahrenheit(20)

// console.log(`${celsius} = ${temp}`);

const num = 10
const numbers = []

for (let i=0; i < num; i++) {
    numbers.push(i)
     }

const check = (num2) => {
    num2 % 3 === 0 && num2 !== 0 ? console.log(`${num2} jest podzielne przez 3`): console.log(`${num2} nie jest podzielne przez 3 lub x=0`);;
}

numbers.forEach(check)