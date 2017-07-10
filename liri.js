//LIRI BOT!!
//add required pacakages.

var fs = require('fs');
var request = require('request')
var keys = require('./keys.js')
var Twitter = require('twitter');
var spotify = require('node-spotify-api');


console.log("this is " + keys);


var nodeArgv = process.argv;
var cmd = process.argv[2];

//Function commands
//-----------------------------------------------------------
//Twitter
if (cmd === 'my-tweets'){
  tweetFunction()
}

//Spotify
if (cmd === 'spotify-this-song'){
  spotifyFunction()
}

//Node functions
//-----------------------------------------------------------

//Twitter
function tweetFunction(){

var client = new Twitter(keys.twitterKeys);

  var params = {
      screen_name: 'Starlord40k'
    };

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {

      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
            }
    }
  });
};

//Spotify
function spotifyFunction(){

var spotifySearch = new spotify (keys.spotifyKeys);
var spotifyInput =  process.argv.slice(3).join(" ");

   spotifySearch.search ({
    type: 'track',
    query: spotifyInput},

    function(err, data) {

      if (err) {
      return console.log('Error occurred: ' + err);
    }

      console.log(data);

  });
};
