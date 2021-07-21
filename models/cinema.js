const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.returnTitles = function(films){ 
  const titles = films.map((film)=>{
    return film.title
  })
  return titles
}
Cinema.prototype.findFilm = function(films, film_title){
  // return film.title === film_title
  const found = films.find(film => film.title === film_title);
  return found;
  };

Cinema.prototype.filterGenres = function(films, genre){
  const results = films.filter(film => film.genre === genre);

  return results 
};

module.exports = Cinema;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find