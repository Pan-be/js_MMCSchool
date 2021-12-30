const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color');
const par = document.querySelector('p')

let fontSize = 36


const rise = () => {
    if (fontSize >= 71) return
    
    fontSize += 5
    par.style.fontSize = fontSize + 'px'
}

const reduction = () => {
    if (fontSize <= 21) return

    fontSize -= 5
    par.style.fontSize = fontSize + 'px'
}



const colorChange = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    par.style.color = `rgb(${r},${g},${b})`
}


sizeUp.addEventListener('click', rise)
sizeDown.addEventListener('click', reduction)
color.addEventListener('click', colorChange)
