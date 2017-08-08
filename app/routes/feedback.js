var express = require('express');
var router = express.Router();

router.get('/feedback', function(req, res) {

  res.render('index', {
    pageTitle: 'Feedback',
    pageID: 'feedback'
  });

});

module.exports = router;
