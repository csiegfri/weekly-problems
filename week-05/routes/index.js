let express = require('express');
let router = express.Router();
let app = express();




/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "hi" });
});

router.get('/fall',function(req, res){
  app.get("../public/api/fall.json")
});

module.exports = router;
