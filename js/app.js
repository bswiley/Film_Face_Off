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


//HTTPS Links for API call
var apikey = "0369d0746be36bbf12f206aeb60eac4d";

var posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US";

var similarMovie = "https://api.themoviedb.org/3/movie/49519/similar?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1";

var movieList=[];

//constructors for main page movie preference values
const button = document.querySelector('#button');
const Genre = document.getElementById('Genre');
const lowRating = document.getElementById('ratingLow');
const highRating = document.getElementById('ratingHigh');
const actors = document.querySelector('#actors')
const yearFrom = document.getElementById('yearFrom');
const yearTo = document.getElementById('yearTo');

const voteButton1 = document.getElementById('faceoffButton1');
const voteButton2 = document.getElementById('faceoffButton2');

if (button) {
  button.addEventListener('click', function(event) {
   event.preventDefault();
   actor = actors.value;
   saveString = {
    "actor":actor
   }
  localStorage.setItem("actor", JSON.stringify(saveString));
   try {
      window.location.href = './htmls/faceoff.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = 'htmls/error.html';
    }
})}