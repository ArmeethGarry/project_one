/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; ) {
            let movie = prompt('Один из последних просмотренных фильмов?', '');
            let assess = prompt('На сколько оцените его?', '');
        
            if( movie == null || assess == null || movie == '' || movie.length > 50 ) continue;
        
            personalMovieDB.movies[movie] = assess;
            i++;
        }
    },
    showMyDB: function(hidden) {
        if( !hidden ) {
            return console.log( personalMovieDB );
        }
    },
    toggleVisibleMyDB: function() {
        if( personalMovieDB.privat ) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for( let i = 1; i < 4; ) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if( genre === '' || genre == null ) {
                console.log( 'Вы ввели не коррктные данные. Попробуйте еще раз.' );
                continue;
            } else {
                personalMovieDB.genres[i - 1] = genre;
                i++
            }            
        }

        personalMovieDB.genres.forEach( ( elem, i ) => {
            console.log( `Любимый жанр #${i + 1} - это ${elem}` );
        });
    }
};