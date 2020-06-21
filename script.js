let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log("done");
    } else {
        console.log('error');
        i--;
    }   
}




if (personalMovieDb.count < 10) {
    console.log("Вы посмотрели мало фильмов");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30 ) {
    console.log("Вы обычный зритель");
} else if(personalMovieDb.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log('Вы ввели не число')
};


console.log(personalMovieDb)