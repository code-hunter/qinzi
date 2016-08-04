var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('signature:' + req.query.signature);
  console.log('timestamp:' + req.query.timestamp);
  console.log('nonce:' + req.query.nonce);
  console.log('echostr:' + req.query.echostr);
  
  res.send(req.query.echostr);
});

module.exports = router;
