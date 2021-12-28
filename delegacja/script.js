const allCircles = document.querySelectorAll('.circle')
const gold = document.querySelector('.gold')
const lime = document.querySelector('.lime')

//allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))

const purple = document.createElement('div')

purple.classList.add('circle', 'purple')

gold.appendChild(purple)

lime.addEventListener('click', e => {
    if (e.target.matches('.circle2')) {
        console.log('test')
    }
})