var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/chat', function(req, res, next) {
let name = req.body.avatar
res.render('chat', {name})
})

module.exports = router;
