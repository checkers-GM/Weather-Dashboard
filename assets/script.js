// Variables to access API and store current and previous locations

$(document).ready(function () {
  var apiKey = "bf0ae420b2bc44b42bfb5137eb028baa";
  var currentCity;
  var pastCity = [];

  $("#city-button").on("click", function (event) {
    console.log("I've been clicked.");
    event.preventDefault();
    var cityEntry = $("#cityInput").val();
    console.log(cityEntry);
    $("#cityInput").val("");
    getCurrentCity(cityEntry);
  });

  // write function to get current location from cities array

  // write function to get longitude and latitude from weather api app

  // write function to handle errors

  // display previous searched locations from local storage

  // call information from weather API with user input city
  function getCurrentCity(city) {
    var queryURL =
      "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    // Ajax get call to api
    $.ajax({
      url: queryURL,
      method: "GET",
      // Store the data inside of response object
    }).then(function (response) {
      console.log(response);
      console.log(queryURL);
      //remove any data inside html tag
      $("#currentWeather").empty();
      // create variables with response data from ajax call
      var cityTempEl = $("<p>").text("Temperature:" + response.main.temp);
      var cityHumidityEl = $("<p>").text("Humidity:" + response.main.humidity);
      var cityWindEl = $("<p>").text("Wind:" + response.wind.speed);
      //Create div to append variables to page
      var weatherDataDiv = $("<div>");
      weatherDataDiv.append(cityTempEl, cityHumidityEl, cityWindEl);
      $("#currentWeather").html(weatherDataDiv);
    });
  }
  // add city to local storage city array

  // function for search button click
});
