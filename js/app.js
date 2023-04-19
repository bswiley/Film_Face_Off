$(document).foundation();
/*
genres {
"Action: 28,
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
"war": 17,
"Western": 18
}
//var omdbURL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d8eaee1";

//HTTPS Links for API call
var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US";

var similarMovie = "https://api.themoviedb.org/3/movie/49519/similar?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1";

var movieList = [];

//constructors for main page movie preference values
const button = document.querySelector('#button');
const Genre = document.getElementById('Genre');
const lowRating = document.getElementById('ratingLow');
const highRating = document.getElementById('ratingHigh');
const Actors = document.getElementById('Actors')
const yearFrom = document.getElementById('yearFrom');
const yearTo = document.getElementById('yearTo');

const movie1 = {poster:"img1", Title:"movie1", description:"Movie Description 1"};
const movie2 = {poster:"img2", Title:"movie2", description:"Movie Description 2"};
const movie3 = {poster:"img3", Title:"movie3", description:"Movie Description 3"};
const movie4 = {poster:"img4", Title:"movie4", description:"Movie Description 4"};
const movie5 = {poster:"img5", Title:"movie5", description:"Movie Description 5"};
const movie6 = {poster:"img6", Title:"movie6", description:"Movie Description 6"};
const movie7 = {poster:"img7", Title:"movie7", description:"Movie Description 7"};
const movie8 = {poster:"img8", Title:"movie8", description:"Movie Description 8"};
const voteButton1 = document.getElementById('faceoffButton1');
const voteButton2 = document.getElementById('faceoffButton2');

if (button) {
  button.addEventListener('click', function(event) {
    //event.preventDefault();
    //tries to access faceoff.html, if it catches an error it redirects to error.html
    try {
      window.location.href = 'htmls/faceoff.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = 'htmls/error.html';
    }
});
}


voteButton1.addEventListener('click', function() {
  // Your code to handle button 1 click goes here
  console.log('Button 1 clicked!');
});
voteButton2.addEventListener('click', function() {
  // Your code to handle button 1 click goes here
  console.log('Button 2 clicked!');
});

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


fetch(apiURL)
.then(function(response){
    return response.json;
})

}).then(function (data) {
    console.log(data);
    movieList = data.results;
});
}

searchMovie();

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

*/



var movie = [0,1,2,3,4,5,6,7,]
function searchActor(blank){
var actorSearch = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US"

fetch(actorSearch).then(function(response){

  return response.json();

}).then(function (data) {

console.log (data);
    
})}

searchActor ()
