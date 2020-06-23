"use strict"




let personalMovieDb = {
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?"),
                b = prompt("На сколько оцените его?");
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDb.movies[a] = b;
                console.log("done");
            } else {
                console.log('error');
                i--;
            };   
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDb.count < 10) {
            console.log("Вы посмотрели мало фильмов");
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30 ) {
            console.log("Вы обычный зритель");
        } else if(personalMovieDb.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('Вы ввели не число')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },

    toggleVisibleMyBD: function() {
            if (personalMovieDb.privat) {
                personalMovieDb.privat = false;
            } else {
                personalMovieDb.privat = true;
            }
    },


    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == "" || genre == null) {
                console.log("Вы ввели некорректные данные ");
                i--;
            } else {
                personalMovieDb.genres [i-1] = genre;
            }



             
        }
        personalMovieDb.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i + 1} -это ${item}`);
        });
    }
    
};











