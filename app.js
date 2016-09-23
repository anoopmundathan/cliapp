var http = require('http');
var url = 'http://www.omdbapi.com/?t=rambo&y=&plot=short&r=json';
// var treehouseURL = 'http://teamtreehouse.com/chalkers.json';

var request = http.get(url, function(response) {
   
  var body = "";

  response.on('data', function(chunk) {
  	body += chunk;
  });

  response.on('end', function() {
  	console.log(body);
  	console.log(typeof(body));
  	console.log(JSON.parse(body).Title);
  });

});

request.on('error', function(e) {
	console.error(e.message);
})