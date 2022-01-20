const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')


function Meal (name, price) {
    this.name = name
    this.price = price
}

const newMeal1 = new Meal('schabowy', 29)
const newMeal2 = new Meal('pizza', 25)
const newMeal3 = new Meal('zupa', 8)

Meal.prototype.info = function() {
    console.log(`${this.name} kosztuje ${this.price}zł.`);
}

btn1.addEventListener('click', () => {
    newMeal1.info()
})
btn2.addEventListener('click', () => {
    newMeal2.info()
})
btn3.addEventListener('click', () => {
    newMeal3.info()
})