const paragraph1 = document.querySelector('.p1')
const paragraph2 = document.querySelector('.p2')
const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const square = document.querySelector('.square')


const hi = () => {
    console.log('Cześć')
}

const redSquare = () => {
    square.style.background = 'red'
}

const blueSquare = () => {
    square.style.background = 'blue'
}

 const changeP = () => {
     paragraph1.classList.toggle('show')
     paragraph2.classList.toggle('show')
 }

button1.addEventListener('dblclick', hi)
square.addEventListener('mouseenter', redSquare)
square.addEventListener('mouseleave', blueSquare)
button2.addEventListener('click', changeP)