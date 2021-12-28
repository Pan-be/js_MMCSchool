const ulList = document.createElement('ul')

document.body.appendChild(ulList)

for (let i=1; i<11; i++) {
    const liElement = document.createElement('li')
    liElement.textContent = i
    ulList.appendChild(liElement)
}

const lastLi = ulList.querySelector('li:last-child')
lastLi.textContent = 'Jestem ostatnim elementem'

lastLi.style.backgroundColor = 'royalblue'
lastLi.style.padding = '20px 40px 20px 40px'
lastLi.style.fontSize = '48px'