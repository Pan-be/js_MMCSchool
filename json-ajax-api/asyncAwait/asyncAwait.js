const URL = 'https://dog.ceo/api/breeds/image/random'

fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data.message))
    .catch(error => console.error(error))

async function test() {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data.message)
    } catch {
        console.error('błąd');
    }
}

test()