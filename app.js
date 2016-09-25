var profile = require('./profile');

//var users = ["anoopmundathan", "chalkers", "joykeston2"];

// users.forEach(function(user) {
//   profile.get(user);
// });

// users.forEach(profile.get);

// Access command Line argumnets
var users = process.argv.slice(2);
users.forEach(profile.get);

