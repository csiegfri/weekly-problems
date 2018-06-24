let express = require('express');
let router = express.Router();
let app = express();


app.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Week 5" });
});


module.exports = router;
