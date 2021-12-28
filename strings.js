const pass = 'ad!2ubalkde32'

if (pass.length > 10 && pass.includes('!')) {
    console.log('Masz rewelacyjne hasło');
} else if (pass.length > 10) {
    console.log('Masz dobre hasło');
} else {
    console.log('Masz za krótkie hasło');
}

// const text='powiększ'

// console.log(text.toUpperCase());

// const text2='POMNIEJSZ'

// console.log(text2.toLowerCase());

// const text3='$#%#^ wytnij te dziwne znaki na początku!'

// console.log(text3.slice(6));

// const text4 = 'Sprawdź czy zawieram słowo "czy"';

// const word = 'czy';

// console.log(text4.includes(word))

// const text5 = 'Wyloguj w konsoli tylko literę "L" z wyrazu "WYLOGUJ".';

// const index = 47;

// console.log(text5.charAt(index))

// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'

// console.log(text6.replaceAll('pies', 'kot'));

// const text7 = 'podziel, ten, string, od, przecinków'

// console.log(text7.split(','))