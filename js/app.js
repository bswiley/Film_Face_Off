$(document).foundation()


//constructors for main page movie preference values
const button = document.querySelector('button');
const Genre = document.getElementById('Genre');
const lowRating = document.getElementById('ratingLow');
const highRating = document.getElementById('ratingHigh');
const Actors = document.getElementById('Actors')
const yearFrom = document.getElementById('yearFrom');
const yearTo = document.getElementById('yearTo');

button.addEventListener('click', function(event) {
    event.preventDefault();

    //tries to access faceoff.html, if it catches an error it redirects to error.html
    try {
  
      window.location.href = 'htmls/faceoff.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = 'error.html';
    }
  window.location.href = 'htmls/error.html';
});

var apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d8eaee1";

fetch(apiURL)
.then(function(response){
    return response.json;
})

