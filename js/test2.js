
var apikey = "0369d0746be36bbf12f206aeb60eac4d";

var movie = [0,1,2,3,4,5,6,7,]
//function searchActor(actorName){
//var actorSearch = "https://api.themoviedb.org/3/search/person?api_key="+apikey+"&language=en-US&page=1&include_adult=false&query="+actorName;


//These functions will pull up 8 movie titles for a genere name. 


  
  function searchID(genre){
  var idSearch = "https://api.themoviedb.org/3/discover/"+genre+"?api_key="+apikey+"&append_to_response=credits"
  var genreSearch = "https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&page=1with_genre_id=99"
  fetch(genreSearch).then(function(response){
  
      return response.json();
    
    }).then(function (data) {  
    console.log (data); 
    
   // formatTitles(data);
    
  })
  };
  
  function formatTitles(data){
  for (var i =0;i<8;i++ )
  movie[i] = data.credits.cast[i].original_title
  console.log (movie)};
  
  
  searchID(99);
  