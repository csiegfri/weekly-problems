var express = require('express');
var router = express.Router();

let fall = null;

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('/public/api/fall.json')
    .then(response => response.json())
    .then(responseJSON => fall);
  let example = fall.metadata.semester;
  res.render('index', { title: example });
});

module.exports = router;
