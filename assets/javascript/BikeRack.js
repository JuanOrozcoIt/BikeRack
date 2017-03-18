console.log("Hello world!");
console.log(Math.PI);
console.log("Remember to upload to GH pages!");

// create array and start "for"-loop.
var foodArray = ["Pizza","BBQ","Salad"];
console.log(foodArray.length);
for (var i = 0; i < foodArray.length; i++){
  		console.log(foodArray[i]);
};// end of for loop
//$(document).ready(function () {
// "$$app_token" : "5be88187-635f-290f-f7c4-74fddd43498d
var urlBase = "https://data.sfgov.org/resource/dd7x-3h4a" 
var location = "Golden State Market";
	$.get(urlBase+location, function(data) {
	console.log("here", data);
	});