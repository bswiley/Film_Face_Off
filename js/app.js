$(document).foundation();

//var omdbURL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d8eaee1";

//HTTPS Links for API call
var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US";

var similarMovie = "https://api.themoviedb.org/3/movie/49519/similar?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1";

var movieList = [];

//constructors for main page movie preference values
const button = document.querySelector('button');
const Genre = document.getElementById('Genre');
const lowRating = document.getElementById('ratingLow');
const highRating = document.getElementById('ratingHigh');
const Actors = document.getElementById('Actors')
const yearFrom = document.getElementById('yearFrom');
const yearTo = document.getElementById('yearTo');

/*button.addEventListener('click', function(event) {
    event.preventDefault();

    //tries to access faceoff.html, if it catches an error it redirects to error.html
    try {
  
      window.location.href = 'htmls/faceoff.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = 'error.html';
    }
  window.location.href = 'htmls/error.html';
});*/

//Prints a list of viable genres to the console.
//This method will not be in final version, only exists to test api calls
function returnGenreList(){
fetch(tmdbURL).then(function(response){

  return response.json();

}).then(function (data) {
    for(var i=0; i<data.genres.length; i++){
      console.log(data.genres[i]);
    }
});
}
function searchMovie(){

fetch(similarMovie).then(function(response){

  return response.json();

}).then(function (data) {
    console.log(data);
    movieList = data.results;
    $('#title-left').textContent = movieList[0].original_title;
});
}

searchMovie();

//Searches an Actor by name and pulls their information from the database.
//Only pulls their 3 most popular movies, may not work for what we want?
/*function searchActor(actorName){
var actorSearch = " https://api.themoviedb.org/3/search/person?query="+actorName+"&api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1&include_adult=false";

fetch(actorSearch).then(function(response){

  return response.json();

}).then(function (data) {
    console.log(data);
});
}

searchActor("Nicolas Cage");*/