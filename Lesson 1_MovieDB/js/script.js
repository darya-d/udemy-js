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

// Цикл автоматизирует задавание вопросов пользователю
for (let i = 0; i < 2; i++) {
  const answerLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        answerRateFilm = prompt('На сколько оцените его?', '');
  
  if (answerLastFilm != null && answerRateFilm != null &&       // нажата ли кнопка отмена
      answerLastFilm != '' && answerRateFilm != '' && 
      answerLastFilm.length < 50 ) {
        personalMovieDB.movies[answerLastFilm] = answerRateFilm;  // Записали ответы в объект movies в формате объекта
        console.log('Успех!');
      } else {
        console.log('Провал!');
        i--;
      }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
