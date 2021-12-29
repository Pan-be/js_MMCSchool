const link = document.querySelector('a')
const img = document.querySelector('img')
const p = document.querySelector('p')
//data atrybut:
const divTag = document.querySelector('[data-number="14"]')

//dodawanie atrybutu:
link.setAttribute('href', 'http://google.com')

//pobieranie atrybutu:
console.log(img.getAttribute('alt'));

//sprawdzenie czy posiada atrybut
console.log(p.hasAttribute('style'))

//usuwanie atrybutu:
p.removeAttribute('style')

console.log(divTag.dataset.moreInfo);

//dodawanie atrybutu data:
divTag.setAttribute('data-test', 'test')
console.log(divTag.dataset);
