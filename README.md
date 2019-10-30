# liri-bot
 Language Interpretation and Recognition Interface with Node.js 
_____________________________________________________
This application titled "LIRI BOT" will function as a command line search and display tool. The application will call from the Spotify, OMDB & BandsInTown APIs' to complete search request. The LIRI will accept input from the user then log the responses to a .txt file.
______________________________________________________
The app will use arguments 'PROCESS.ARGV' and 'INQUIER' methods to both state and handle intake of user inputs for api calls. 
_____________________________________________________
The LIRI bot will use modularization via the 'REQUIRE' method for axios packages located in the node modules that have pre-wrapped js files. Those files will enable the LIRI bot to access functionality that has been previously encoded by developers to be used in other node.js apps such as this one.
_____________________________________________________
The LIRI Bot will take the existing CLI inputs by the user and write the JSON response onto a separate .txt file. This will be done via the 'FS.READ & FS.WRITE' methods. The returning information will return in a string then seprated by 'DATA.SPLIT' element to be stored in an array that will output the information. The returning strings willl be appended to the .txt file using the 'FS.APPENDFILE' element.
______________________________________________________
The LIRI bot will use package.json files to store & track the related node modules using 'AXIOS' node package. 'AXIOS' will work in conjuction with the 'REQUIRE' method to be called into the js file. Once availible the axios.get function will be called in order to take in URLs and return a promise, like an ajax call in javascript.
______________________________________________________
Technologies USED
* NODE.JS
* Javascript
* MOMENT.JS
______________________________________________________
APIs' USED
* SPOTIFY ""
* OMDB ""
* BandsInTown ""
______________________________________________________
NPM PACKAGES USED 
* AXIOS ""
* DOTENV ""
* SIMPLE NODE LOGGER ""
* Moment.js ""
* NODE-SPOTIFY-API ""
______________________________________________________
LIRI BOT COMMANDS

   * concert-this

   * spotify-this-song

   * movie-this

   * do-what-it-says
______________________________________________________
TO DEPLOY
* CLONE REPO
* RUN NPM INSTALL
* COMMAND PROMPT node liri-js ' liri bot commands here '

https://github.com/shumie-code/liri-bot/blob/master/screenshots/liri1.png
https://github.com/shumie-code/liri-bot/blob/master/screenshots/liri2.png
https://github.com/shumie-code/liri-bot/blob/master/screenshots/liri3.png
