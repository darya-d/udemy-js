'use strict';

// ! Вся инфа от пользователя передается в виде строк!

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');      // + для конвертации ответа-строки в число

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const answerLastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
      answerRateFilm1 = prompt('На сколько оцените его?', ''),
      answerLastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      answerRateFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answerLastFilm1] = answerRateFilm1;      // Записали ответы в объект movies в формате объекта
personalMovieDB.movies[answerLastFilm2] = answerRateFilm2;

console.log(personalMovieDB);