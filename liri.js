require("dotenv").config();

// Variable for "fs" to 
var fs = require("fs");
// Variable used for acess to spotify node api
var Spotify = require('node-spotify-api');
// Variable for Axios node package for ajax .get functionality
var axios = require('axios');
// variable for moment node package for time stamping 
var moment = require('moment');
// variable that holds client secret and access keys
var keys = require('./keys.js');
// variable for acessing spotify client and secret keys
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var arg = process.argv;
var refrence = [];
var theSong = '';
var theArtist = '';
var fileName = 'log.txt';
var fullCommand = [];


for (var i = 3; i < arg.length; i++) {
  refrence.push(arg[i])
}

var refrenceArtist = refrence.join("");

// fullCommand logs commands to to log.txt file after command input
fullCommand.push(command);
if(refrence.length != 0){
  fullCommand.push(refrenceArtist);
}


//Function that logs information to  log.txt file using fs.append element
function log(value){
  fs.appendFile(fileName, ',' + value, function(err){
    return console.log("Ya blew it")
  })
}

log(fullCommand);

// Command statements for BandInTown, Spotify, and OMDB, do-what-it-says

if (command === 'concert-this') {
  concert(refrenceArtist);
} else if (command === 'spotify-this-song') {
  spotifySong(refrence);
} else if (command === 'movie-this') {
  theMovie(refrence);
} else if (command === 'do-what-it-says') {
  doThat();
}

//concert-this function
function concert(artist) {
  var artistURL = "https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp";
  axios.get(artistURL).then(
    function (response) {
      console.log(" ");
      console.log("Band/Artist/info: " + artist + "***");
      for (var i = 0; i < response.data.length; i ++) {

        // Places datetime as a varible
        var datetime = response.data[i].datetime;
        // Splits the date and time in the response
        var dateArray = datetime.split('T');

        var artistResults =
        "------------------------------------------------" +
        "\nVenue Name: " + response.data[i].venue.name +
        "\nVenue Location: " + response.data[i].venue.city +
        "\nDate of the Event: " + moment(dateArr[0], "YYYY-DD-MM").format('DD/MM/YYYY');
        console.log(artistResults);
      } console.log("  ");
      console.log("******************************* ");
      console.log(" ");
    })
    .catch(function (err) {
      console.log('This is the err: ' + error); 
    });
  
}