var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('episodeData');

  res.render('index', {
    pageTitle: 'Home',
    pageID: 'home',
    episodes: data.episodes
  });

});

module.exports = router;
