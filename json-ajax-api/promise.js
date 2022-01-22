const checkAge = age => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve()
        } else {
            reject()
        }
    })
}

const doubleCheck = () => {
    return new Promise(resolve => {
        console.log('Sprawdzam jeszcze raz...')
        setTimeout(() => {
            resolve('Faktycznie, wiek się zgadza.')
        }, 1000)
    })
}

// checkAge(18)
//     .then(() => {
//         console.log('Chyba możesz wejść.')
//         return doubleCheck()
//     })
//     .then(res => console.log(res))
//     .then(() => {
//         console.log('Weryfikacja zakończona!');
//     })
//     .catch(error => console.error(error))

async function test() {
    try {
        await checkAge(20)
        console.log('Chyba możesz wejść')
        await doubleCheck()
        console.log('Faktycznie, wiek się zgadza')
        console.log('Weryfikacja zakończona!');
    } catch {
        console.error('Błąd, masz za mało lat');
    }
}

test()