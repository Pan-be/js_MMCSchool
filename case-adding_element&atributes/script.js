const liElements = document.querySelectorAll('li')

// console.log(liElements);

let number = 1
for (const li of liElements) {
    li.textContent = number
    li.dataset.id = number
    number++
}



const li3 = document.querySelector('[data-id="3"]')
console.log(li3.closest('.wrapper'));
