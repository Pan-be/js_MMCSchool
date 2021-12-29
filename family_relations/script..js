const grandpa = document.querySelector('.grandpa')
console.log(grandpa.querySelector('.parent'));
console.log(grandpa.querySelectorAll('.child'));

//poprzedni element - previousElementSibling
const middleChild = document.querySelector('.middle-child')
console.log(middleChild);

const prevSibling = middleChild.previousElementSibling
console.log(prevSibling);

//następny element - nextElementSibling
const nextSibling = middleChild.nextElementSibling
console.log(nextSibling);


//odnisienie do rodzica - parentElement
const parentEl = middleChild.parentElement
console.log(parentEl);

//odnisienie do każdego wyżej - closest
console.log(middleChild.closest('.grandpa'));