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

  // write function to handle errors

  // display previous searched locations from local storage

  // call information from weather API with user input city
  function getCurrentCity(city) {
    var queryURL =
      "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey;
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

    //  5 day forecast query URL for ajax call

    var forecastQueryURL =
      "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      apiKey;

    //  5 day forecast ajax call
    $.ajax({
      url: forecastQueryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(forecastQueryURL);
      var forecastResults = response.list;
      console.log(response.list);
      //empty the div that contains forecast data
      $("#weatherForecast").empty();

      for (var i = 0; i < forecastResults.length; i += 8) {
        //create div
        var forecastResultsDiv = $("<div>");
        forecastResultsDiv.append(forecastResults);
        $("weatherForecast").html(forecastResultsDiv);
      }

      //console.log(latitude);
      var latitude = response.coord.lon;
      console.log(rresponse.coord.lon);
      var longitude = response.coord.lat;
      var weatherQueryURL =
        "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" +
        latitude +
        "&lon=" +
        longitude;

      $.ajax({
        url: weatherQueryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        $("#currentUV").empty();
        var UV = $("<p>").text("UV Index: " + response.value);
        console.log(UV);
        $("#currentUV").html(UV);
      });
    });
  }

  // create Ajax call with longitude and latitude data to get UV data

  // Use response data from object to get UV

  // add city to local storage city array

  // function for search button click
});
