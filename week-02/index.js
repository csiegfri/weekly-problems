// TODO: Read the contents of `README.md` before hacking on this file

// Require the file system
const fs = require('fs');
// Require the request-promise-native package
const req = require('request-promise-native');

const options = {
  // TODO: Create an object literal to hit your account on the GitHub API,
  // and pass any other information the API requires (you should not have
  // to authenticate for this, however)

  uri: 'https://api.github.com/users/csiegfri',
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true

};

req(options)
  .then(function(profile_json){

      // TODO: Handle the returned JSON data and write it to a file called
      // `response.json` in your `week-two/` directory

      console.log(profile_json);
      var json = JSON.stringify(profile_json);
      fs.writeFile('response.json', json, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

  })

  .catch(function(err) {
    console.log(err);
  });
