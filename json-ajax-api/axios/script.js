const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const URL = 'https://dog.ceo/api/breeds/image/random'

//klasyczny fetch
fetch(URL)
    .then(res => res.json())
    .then(res => one.setAttribute('src', res.message))

//axios
axios.get(URL)
    .then(res => two.setAttribute('src', res.data.message))

//async&await
async function showImage() {
    const response = await axois.get(URL)
    three.setAttribute('src', response.data.message)
}

showImage()