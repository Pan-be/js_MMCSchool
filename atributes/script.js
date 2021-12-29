const link = document.querySelector('a')
const img = document.querySelector('img')
const p = document.querySelector('p')

//dodawanie atrybutu:
link.setAttribute('href', 'http://google.com')

//pobieranie atrybutu:
console.log(img.getAttribute('alt'));

//sprawdzenie czy posiada atrybut
console.log(p.hasAttribute('style'))

//usuwanie atrybutu:
p.removeAttribute('style')
