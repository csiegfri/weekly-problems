var express = require('express');
var router = express.Router();

// Re-grabbing the code from Week 2 and Week 1
const requ = require('request-promise-native');

const options = {
  uri: 'https://api.github.com/users/csiegfri',
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true

};

requ(options)
  .then(function(profile_json){
    var jlogin = JSON.stringify(profile_json.login);
    var jid = JSON.stringify(profile_json.id);
    var javatar = JSON.stringify(profile_json.avatar_url);
    var jhtml_url = JSON.stringify(profile_json.html_url);
    var jname = JSON.stringify(profile_json.name);
    var jbio = JSON.stringify(profile_json.bio);
    var jupdated_at = JSON.stringify(profile_json.updated_at);
);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Index',
    log: jlogin,
    id: jid,
    ava: javatar,
    html: jhtml_url,
    name: jname,
    bio: jbio,
    update: jupdated_at });
});

module.exports = router;
