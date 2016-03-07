var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    scriptUrl: '/javascripts/app.js'
  });
});

router.get('/outOfScope', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    scriptUrl: '/javascripts/outOfScope.js'
  });
});

router.get('/delayed', function(req, res, next) {
  setTimeout(function() {
    res.render('index', {
      title: 'Express',
      scriptUrl: '/javascripts/skipServer.js'
    });
  }, 5000);
});

module.exports = router;
