//$(document).foundation()

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


var apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d8eaee1";

fetch(apiURL)
.then(function(response){
    return response.json;
})