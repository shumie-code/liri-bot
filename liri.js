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
var reference = [];
var theSong = '';
var theMovie = '';
var theBand = '';
var fileName = 'log.txt';
var fC = [];

// For multiple user input
for (var i = 3; i < arg.length; i++) {
  reference.push(arg[i])
}

var referenceBand = reference.join("");


// fc logs commands to to log.txt file after command input
fC.push(command);
if(reference.length != 0){
  fC.push(referenceBand);
}


//Function that logs information to  log.txt file using fs.append element
function logging(value){
  fs.appendFile(fileName, ',' + value, function(err) {
    if (err) {
      return console.log("Ya Blew It")
    }
  })
}

logging(fC);

// Command statements for BandInTown, Spotify, and OMDB, do-what-it-says

if (command === 'concert-this') {
  concert(referenceBand);
} else if (command === 'spotify-this-song') {
  spotifySong(reference);
} else if (command === 'movie-this') {
  movie(reference);
} else if (command === 'do-what-it-says') {
  doThat();
}

//concert-this function
function concert(referenceBand) {
  var bandURL = "http://rest.bandsintown.com/artists/" + referenceBand + "/events?app_id=trilogy";
  axios.get(bandURL).then(
    function (response) {
      console.log("  ");
      console.log("-------Artist Items-----: " + referenceBand + "------");
      for (var i = 0; i < response.data.length; i++) {

        // Places datetime as a varible
        var datetime = response.data[i].datetime;
        // Splits the date and time in the response
        var dateArr = datetime.split('T');

        var concertResults =
        "------------------------------------------------" +
        "\nVenue Name: " + response.data[i].venue.name +
        "\nVenue Location: " + response.data[i].venue.city +
        "\nDate of the Event: " + moment(dateArr[0], "YYYY-DD-MM").format('DD/MM/YYYY');
        console.log(concertResults);
      } console.log("  ");
      console.log("******************************* ");
      console.log(" ");
    })
    .catch(function (error) {
      console.log('This is the error: ' + error); 
    });
  
}

//Spotify This Song Method
function spotifySong(reference) {
  if(reference.length === 0){
    reference = "I want it that way";
  }
  spotify
  .search({ type: 'track', query: reference })
  .then(function(response) {
    console.log(" ");
    console.log("-----Searching----"+reference+"---------");
    console.log(" ");
    for (var i = 0; i < 5; i++) {
      var spotifyResults =
      "--------------------" +
      //Artist Name
      "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
      // Song name
      "\nSong Name: " + response.tracks.items[i].name +
      // Album Name
      "\nAlbum Name: " + response.tracks.items[i].album.name + 
      // Song Preview
      "\nPreview Link: " + response.tracks.items[i].preview_url;

      console.log(spotifyResults);
    }
    console.log(" ");
    console.log("---------------------- ");
    console.log(" ");
  })
  .catch(function(err) {
    console.log(err);
  });


}

//Movie-this Method 
function movie(reference) {
  if(reference.length === 0){
    reference = "mr nobody";
  }
  axios.get('http://www.omdbapi.com/?t=' + reference + '&plot=short&apikey=trilogy').then(
    function (response) {

      console.log(" ");
      console.log("-------Movie--Info------"+response.data.title+"---------");
      console.log(" ");

      var movieResults =
      "\n* Title: " + response.data.Title +
      "\n* Year: " + response.data.Year +
      "\n* OMDB Rating: " + response.data.Rated +
      "\n* Country: " + response.data.Country +
      "\n* Language: " + response.data.Language +
      "\n* Plot: " + response.data.Plot +
      "\n* Actors: " + response.data.Actors +
      "\n " + 
      "\n***************************** " +
      "\n ";
      console.log(movieResults);
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });

}

// Do what it says Method

function doThat() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(',');
    console.log('')
    console.log('----------ITEMS----QUERY----RESULTS---------')
    console.log('')
    for (var i = 0; i < dataArr.length; i++) {
      if (dataArr[i] === 'spotify-this-song'){
        theSong = dataArr[++i];
        console.log('--------Searching------'+theSong+'-------')
        spotifySong(theSong);

      } else if (dataArr[i] === 'movie-this') {
        theMovie = dataArr[i++];
        console.log('-------WATCH-----'+theMovie+'--------')
        movie(theMovie);
      } else if (dataArr[i++] === 'concert-this'){
        theBand = dataArr[i++];
        console.log('--------LISTEN-LIVE-------'+theBand+'------')
        concert(theBand);
      } else { console.log("Command not valid");
    }
    
    }
  })
}

