$(document).foundation();

var genres =  {
"Action": 28,
"Adventure": 12,
"Animation": 16,
"Comedy": 35,
"Crime": 80,
"Documentary": 99,
"Drama": 18,
"Family": 10751,
"Fantasy": 14,
"History": 36,
"Horror": 27,
"Music": 10402,
"Mystery": 9648,
"Romance": 10749,
"Science Fiction": 878,
"TV Movie": 10770,
"Thriller": 53,
"war": 10752,
"Western": 37
};


//var omdbURL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d8eaee1";

//HTTPS Links for API call
var apikey = "0369d0746be36bbf12f206aeb60eac4d";

var posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US";

var similarMovie = "https://api.themoviedb.org/3/movie/28/similar?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1";

var movieList=[];

//constructors for main page movie preference values
const button = document.querySelector('#button');
const Genre = document.getElementById('Genre');
const lowRating = document.getElementById('ratingLow');
const highRating = document.getElementById('ratingHigh');
const Actors = document.getElementById('Actors')
const yearFrom = document.getElementById('yearFrom');
const yearTo = document.getElementById('yearTo');

const voteButton1 = document.getElementById('faceoffButton1');
const voteButton2 = document.getElementById('faceoffButton2');

if (button) {
  button.addEventListener('click', function(event) {
    try {
      window.location.href = 'htmls/faceoff.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = 'htmls/error.html';
    }
});
}

let currentMovieIndex = 2;
let LastWinningMovie;

function updateMovies(winningButton) {
  if (winningButton === 1) {
    document.querySelector('#movie-title-2').textContent = movieList.results[currentMovieIndex].original_title;
    document.querySelector('#movie-description-2').textContent = movieList.results[currentMovieIndex].overview;
    document.querySelector('#movie-img-2').src = posterLink + movieList.results[currentMovieIndex].poster_path;
  } else {
    document.querySelector('#movie-title-1').textContent = movieList.results[currentMovieIndex].original_title;
    document.querySelector('#movie-description-1').textContent = movieList.results[currentMovieIndex].overview;
    document.querySelector('#movie-img-1').src = posterLink + movieList.results[currentMovieIndex].poster_path;
  }
}

//Left button event listener, replaces losing movie and saves winning movie.
if(voteButton1){
voteButton1.addEventListener('click', function() {
  console.log('Button 1 clicked!');
  LastWinningMovie = movieList.results[currentMovieIndex - 1];
  if (currentMovieIndex < 8) {
    console.log(LastWinningMovie.original_title)
    updateMovies(1);
    currentMovieIndex++;
  } else {
    console.log(LastWinningMovie.original_title)
    var lSHandle = "winner"
var winner = LastWinningMovie.original_title;
var storeWinner = {
    "Winner": winner
}
localStorage.setItem(lSHandle, JSON.stringify(storeWinner));
    try {
      window.location.href = '../htmls/winner.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = '../htmls/error.html';
    }
  }
});
}
//Right button event listener, replaces losing movie and saves winning movie.
if(voteButton2){
voteButton2.addEventListener('click', function() {
  console.log('Button 2 clicked!');
  LastWinningMovie = movieList.results[currentMovieIndex];
  if (currentMovieIndex < 8) {
    updateMovies(2);
    currentMovieIndex++;
  } else {
    var lSHandle = "winner"
var winner = LastWinningMovie.original_title;
var storeWinner = {
    "Winner": winner
}
localStorage.setItem(lSHandle, JSON.stringify(storeWinner));
    try {
      window.location.href = '../htmls/winner.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = '../htmls/error.html';
    }
  }
});
}

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
    movieList = data;
});
}

searchMovie();

function loadFaceOff(){
  fetch(similarMovie).then(function(response){
  return response.json();
}).then(function (data) {
    console.log(data);
    movieList = data;
    document.querySelector('#movie-title-1').textContent = movieList.results[0].original_title;
    document.querySelector('#movie-title-2').textContent = movieList.results[1].original_title;
    document.querySelector('#movie-description-1').textContent = movieList.results[0].overview;
    document.querySelector('#movie-description-2').textContent = movieList.results[1].overview;
    document.querySelector('#movie-img-1').src = posterLink+movieList.results[0].poster_path;
    document.querySelector('#movie-img-2').src = posterLink+movieList.results[1].poster_path;
  });
}
//Searches an Actor by name and pulls their information from the database.
//Only pulls their 3 most popular movies, may not work for what we want?

var movie = [0,1,2,3,4,5,6,7,]
function searchActor(actorName){
var actorSearch = "https://api.themoviedb.org/3/search/person?api_key=&language=en-US&page=1&include_adult=false&query="+actorName;

fetch(actorSearch).then(function(response){

  return response.json();

}).then(function (data) {
var actorId = data.results[0].id  
console.log (actorId);
    
})}

searchActor("Nicolas Cage");





var movie = [0,1,2,3,4,5,6,7,]
function searchActor(blank){
var actorSearch = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US"

fetch(actorSearch).then(function(response){

  return response.json();

}).then(function (data) {

console.log (data);
    
})}

searchActor ()

