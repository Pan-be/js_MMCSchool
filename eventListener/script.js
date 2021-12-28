// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// btn1.addEventListener('click', function (){
//     console.log('Clicked');
// })

// btn2.addEventListener('mouseover', function (){
//     console.log('mousover');
// })

// const test = () => {
//     console.log('double click');
// }

// btn3.addEventListener('dblclick', test)

const btns = document.querySelectorAll('button')

const clc = () => {
    console.log('click')
}

btns.forEach(btn => btn.addEventListener('click', clc))