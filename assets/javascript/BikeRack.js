console.log("Hello world!");
console.log(Math.PI);
console.log("Remember to upload to GH pages!");

// create array and start "for"-loop.
// var foodArray = ["Pizza","BBQ","Salad"];
// console.log(foodArray.length);
// for (var i = 0; i < foodArray.length; i++){
//   		console.log(foodArray[i]);
//};// end of for loop
//$(document).ready(function () {
// "$$app_token" : "5be88187-635f-290f-f7c4-74fddd43498d
// var urlBase = "https://data.sfgov.org/resource/dd7x-3h4a" 
// var location = "Golden State Market";
// 	$.get(urlBase+location, function(data) {
// 	console.log("here", data);
// 	});


// The code below displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  var Center = {lat: -0, lng: 0};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: Center,
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RACK-N-ROLL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Ready to Rack?</b> Please remember to  <b>ADD A REVIEW AND PICTURE</b>, and the app ' +
      'will allways keep up with updates!'+'.</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: Center,
    map: map,
    title: 'Center'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}// end of Marker code.