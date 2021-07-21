const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.returnTitles = function(){ 
  const titles = this.films.map((film)=>{
    return film.title
  })
  return titles
}
Cinema.prototype.findFilm = function(film_title){
  // return film.title === film_title
  const found = this.films.find(film => film.title === film_title);
  return found;
  };

Cinema.prototype.filterGenres = function(genre){
  const results = this.films.filter(film => film.genre === genre);

  return results 
};

// Cinema.prototype.filterYear = function(year){
//   const results = this.films.filter(film => film.year === year);

//   return results
// };

Cinema.prototype.confirmYear = function(year){
  const films_from_that_year = this.films.some(film => film.year === year);
  return films_from_that_year;
  // const films_from_that_year = this.films.some(film => film.year === year);
  // return films_from_that_year
}

Cinema.prototype.confirmYearNone = function(year){
  const are_there_films_from_that_year_true_is_no_false_is_yes= this.films.every(film => film.year !== year);
  return are_there_films_from_that_year_true_is_no_false_is_yes;
}


module.exports = Cinema;

