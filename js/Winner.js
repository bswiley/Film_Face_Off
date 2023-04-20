

/*/This goes to the end of app.js to save the winner.  If the variable "winner" is already defined to the winning video we can delete the second line
var lSHandle = "winner"
var winner = "Star Wars (1977)"
var storeWinner = { 
    "Winner": winner
}
localStorage.setItem(lSHandle, JSON.stringify(storeWinner));*/
//this is the start of the code for "winner.js"

//This gets the title from local storage as saved in the app.js 
var stored =JSON.parse(localStorage.getItem("winner"))
var winner = stored.Winner
//this grabs the title and the video wrapper to place the video and the movie Title text
var movie = document.querySelector(".videoWrapper")
var titleOnPage = document.querySelector("#movieTitle")
titleOnPage.textContent = winner
var linkEnding;
//this is the fetch function that finds the movie in the Youtube API and grabs the information to put in the elements defined above
function searchVideo(movieTitle) {
  var searchQuery = movieTitle + "trailer";
  var youtubeApiKey = "kAIzaSyB4vGuFttVUg7voCvRZHYmaH_oB0YDPujk";
  var youtubeApi = "https://www.googleapis.com/youtube/v3/search";
//grabs a video based off searchQuery value and provides one result
  var params = new URLSearchParams({
      part: "snippet",
      q: searchQuery,
      type: "video",
      maxResults: 1,
      key: "AIzaSyB4vGuFttVUg7voCvRZHYmaH_oB0YDPujk"
  });
  var Url = youtubeApi + "?" + params;

  fetch(Url) 
  .then(function(response) {
//checks if response is ok and changes response to json
      if (!response.ok) {
          throw response.json();
      }
      return response.json();
  }).then(function(data) {
//grabs the first video asigns it to the movie element
      console.log (data)
      linkEnding = data.items[0].id.videoId;
      console.log (linkEnding)
      var iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${linkEnding}" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> `
      movie.innerHTML=iframe
      console.log (iframe)
  });}
//this calls the function 

searchVideo(winner);
console.log(linkEnding)

