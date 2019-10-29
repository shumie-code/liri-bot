require("dotenv").config();
var fs = require("fs");
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var arg = process.argv;
var refrence = [];
var theSong = '';
var theMovie = '';
var theBand = '';
var fileName = 'log.txt';
var fullCommand = [];


for (var i = 3; i < arg.length; i++) {
  refrence.push(arg[i])
}

var refrenceBand = refrence.join("");

// fullCommand logs commands to to log.txt file after command input
fullCommand.push(command);
if(refrence.length != 0){
  fullCommand.push(refrenceBand);
}


//Function that logs information to  log.txt file using fs.append element
function log(value){
  fs.appendFile(fileName, ',' + value, function(err){
    return console.log("Ya blew it")
  })
}

log(fullCommand);

// Command statements for BandInTown, Spotify, and OMDB