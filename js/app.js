$(document).foundation()
var apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d8eaee1";

fetch(apiURL)
.then(function(response){
    return response.json;
})