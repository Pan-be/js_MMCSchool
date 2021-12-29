const img = document.querySelector('img')

img.setAttribute('src', 'https://www.hubyes.com/wp-content/uploads/2019/04/fd5baaf189ae982bc9e6a86a91d3dd72f3892fbf.JPG')
img.setAttribute('alt', 'boy with a skateboard')
const text = () => {
    console.log('text');
}

setTimeout(text, 2000)
