const movie = {
    title: 'Avengers'
}

function showMovie(price, cinema) {
    console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}.`);
}

showMovie(30, 'Kinoplex')

//funkcja.call(OBIEKT, ARGUMENTY)
showMovie.call(movie, 35, 'Cinema City')

//funkcja.apply(OBIEKT, TABLICA Z ARGUMENTAMI)
const movieData = [25, 'Janosik']

showMovie.apply(movie, movieData)