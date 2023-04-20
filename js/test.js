//https://api.themoviedb.org/3/movie/49519/similar?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1";
//https://api.themoviedb.org/3/movie/343611?api_key={api_key}

var apikey = "0369d0746be36bbf12f206aeb60eac4d";

var movie = [0,1,2,3,4,5,6,7,]
function searchActor(actorName){
var actorSearch = "https://api.themoviedb.org/3/search/person?api_key="+apikey+"&language=en-US&page=1&include_adult=false&query="+actorName;


//These functions will pull up 8 movie titles for an actor's name. 

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
  console.log (data); 
  formatTitles(data);
  
})
};

function formatTitles(data){
for (var i =0;i<8;i++ )
movie[i] = data.credits.cast[i].original_title
console.log (movie)};


searchActor("Julia Roberts");

