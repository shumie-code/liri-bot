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

