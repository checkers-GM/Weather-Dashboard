// Variables to access API and store current and previous locations

var apiKey = "bf0ae420b2bc44b42bfb5137eb028baa";
var currentCity;
var pastCity = [];

// write function to get current location from cities array

// write function to get longitude and latitude from weather api app

// write function to handle errors

// display previous searched locations from local storage

// call information from weather API

function getCurrentCity(city) {
  var queryURL =
    "api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
  // Ajax get call to api
  $.ajax({
    url: queryURL,
    method: "GET",
    // Store the data inside of response object
  }).then(function (response) {
    console.log(response);
    console.log(queryURL);
    //remove any data inside html tag
    $("#currentCity").empty();
    // create variables with response data from ajax call
    var cityTempEl = $("<p>").text("Temperature:" + response.main.temp);
    var cityHumidityEl = $("<p>").text("Humidity:" + response.main.humidity);
    var cityWindEl = $("<p>").text("Wind:" + response.wind.speed);
    //Create div to append variables to page
    var weatherDataDiv = $("<div>");
    weatherDataDiv.append(cityTempEl, cityHumidityEl, cityWindEl);
  });
}
// add city to local storage city array

// function for search button click

// start application
