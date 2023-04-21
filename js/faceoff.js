const voteButton1 = document.getElementById('faceoffButton1');
const voteButton2 = document.getElementById('faceoffButton2');
var actor;
var posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
let currentMovieIndex = 2;
let LastWinningMovie;
var apikey = "0369d0746be36bbf12f206aeb60eac4d";
var data;
var lSHandle = "winner"
var movie = [0,1,2,3,4,5,6,7,]
var poster = [0,1,2,3,4,5,6,7,]
var overview = [0,1,2,3,4,5,6,7,]

var movieTitle1 = document.querySelector('#movie-title-1')
var movieTitle2 = document.querySelector('#movie-title-2')
var movieOverview1 = document.querySelector('#movie-description-1')
var movieOverview2 = document.querySelector('#movie-description-2')
var movieImg1 = document.querySelector('#movie-img-1')
var movieImg2 = document.querySelector('#movie-img-2')




//This function  will pull up 8 movie titles for an actor's name. 
function searchActor(actorName){
var actorSearch = "https://api.themoviedb.org/3/search/person?api_key="+apikey+"&language=en-US&page=1&include_adult=false&query="+actorName;
fetch(actorSearch).then(function(response){

  return response.json();

}).then(function (data) {
var actorId = data.results[0].id  
console.log (actorId);
searchID(actorId);    
})}

function searchID(actorId){
var idSearch = "https://api.themoviedb.org/3/person/"+actorId+"?api_key="+apikey+"&append_to_response=credits"

fetch(idSearch).then(function(response){

    return response.json();
  
  }).then(function (data) { 
for (var i = 0; i<8; i++ ){
movie[i] = data.credits.cast[i].title
poster[i] = data.credits.cast[i].poster_path
overview[i] = data.credits.cast[i].overview
console.log (movie);
console.log (poster);
console.log (overview)
movieList=movie;
}
    

 putInfo(data);
  console.log (data);
 })
};

//This gets the actor from localStorage and starts the fetch function
var sActor = JSON.parse(localStorage.getItem("actor"));
actor = sActor.actor;
searchActor(actor);

function formatTitles(data){
var preActor =JSON.parse(localStorage.getItem("actor"));
actor = preActor.actor
console.log(actor)
console.log(data)
searchActor(actor);
console.log (movie);
console.log (poster);
console.log (overview);
console.log (data);
}

function putInfo(data){
movieTitle1.textContent = movie[0]
movieTitle2.textContent = movie[1]
movieOverview1.textContent = overview[0]
movieOverview2.textContent = overview[1]
movieImg1.src = posterLink+poster[0]
movieImg2.src = posterLink+poster[1]

}
//Left button event listener, replaces losing movie and saves winning movie.
voteButton1.addEventListener('click', function() {
  console.log('Button 1 clicked!');
  LastWinningMovie = movieTitle1.innerHTML;
  if (currentMovieIndex < 8) {
    console.log(LastWinningMovie);
    updateMovies(1);
    currentMovieIndex++;
  } else {
    console.log(LastWinningMovie)
    var winner = LastWinningMovie;
    console.log (winner)
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
//Right button event listener, replaces losing movie and saves winning movie.
voteButton2.addEventListener('click', function() {
  console.log('Button 2 clicked!');
  LastWinningMovie = movieTitle2.innerHTML;
  if (currentMovieIndex < 8) {
    console.log(LastWinningMovie);
    updateMovies(2);
    currentMovieIndex++;
  } else {
   var winner = LastWinningMovie;
   console.log (winner)
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

function updateMovies(winningButton) {
  if (winningButton === 1) {
    document.querySelector('#movie-title-2').textContent = movieList[currentMovieIndex];
    document.querySelector('#movie-description-2').textContent = overview[currentMovieIndex];
    document.querySelector('#movie-img-2').src = posterLink + poster[currentMovieIndex];
  } else {
    document.querySelector('#movie-title-1').textContent = movieList[currentMovieIndex];
    document.querySelector('#movie-description-1').textContent = overview[currentMovieIndex];
    document.querySelector('#movie-img-1').src = posterLink + poster[currentMovieIndex];
  }
}

    
  


  /*$(document).foundation();

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
 /*
let currentMovieIndex = 2;
let LastWinningMovie;



/

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

*/
  
