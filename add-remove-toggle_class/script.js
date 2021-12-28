const addBtn = document.querySelector('.add')
const removeBtb = document.querySelector('.remove')
const toggleBTN = document.querySelector('.toggle')

const text = document.querySelector('p')

//add class

const addClass = () => {
    text.classList.add('test')
}

addBtn.addEventListener('click', addClass)

//remove class

const removeClass = () => {
    text.classList.remove('test')
}

removeBtb.addEventListener('click', removeClass)

//toggle - switch

const toggleClass = () => {
    text.classList.toggle('test')
}

toggleBTN.addEventListener('click', toggleClass)