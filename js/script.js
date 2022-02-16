"use strict";
const numberOfFilms = +prompt ('сколько фильмов вы уже посмотрели?', '')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
privat: false
};
 
const a = prompt('один из последних просмотренных фильмов?','');
const b = prompt('один из последних просмотренных фильмов?','');
const c = prompt('ваша оценка 1-го по 10-ти бальной шкале','');
const d = prompt('ваша оценка 2-го по 10-ти бальной шкале','');

personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;

console.log(personalMovieDB);