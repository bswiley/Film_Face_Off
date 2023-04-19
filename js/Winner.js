/*JS
Copy
$('.sim-thumb').on('click', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})
*/
var movie = document.querySelector(".videoWrapper")
var linkEnding;
function searchVideo() {
  var searchQuery = "Batman (2022)" + "trailer";
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
      //grabs first video and then plays that video in a new window
      console.log (data)
      linkEnding = data.items[0].id.videoId;
      var iframe = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${linkEnding}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> `
      movie.innerHTML=iframe
      console.log (iframe)
    //  var videoUrl = "https://www.youtube.com/watch?v=" + video;
      
  });
 
}
 // logVideo(videoUrl)}

searchVideo();
console.log(linkEnding)

function logVideo(){ 
console.log(video)
}
