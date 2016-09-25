var https = require('https');


// Print out message
function printMessage(userName, badgeCount, points) {
  var message = userName + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// Print out error message
function printErrorMessage(error) {
  console.log(error.message)
}

function get(username) {
  // Connect to API URL 
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    
    var body = "";

    // Read stream of data
    response.on('data', function(chunk) {
      body += chunk;
    });

    // Once stream end
    response.on('end', function() {
      if (response.statusCode === 200) {
        // Error Handling
        try {
          // Convert to JSON object
          var profile = JSON.parse(body);
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          printErrorMessage(error);
        }
      } else {
        printErrorMessage({message: "There was an error occured " + response.statusCode});
      }
    });
  });

  // Connection error
  request.on('error', printErrorMessage);

}

module.exports.get = get;