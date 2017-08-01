var express = require('express');
var router = express.Router();

router.get('/episodes', function(req, res) {
  var data = req.app.get('episodeData');

  res.render('episodes', {
    pageTitle: 'Episodes',
    pageID: 'episodes',
    episodes: data.episodes
  });

});

router.get('/episode/:episodeId', function(req, res) {
  var data = req.app.get('episodeData');
  var episode;

  data.episodes.forEach(function(item){
    if (item.episodeNumber == req.params.episodeId){
      currentEpisode = item;
    }
  });

  res.render('episode', {
    pageTitle: 'Episode Details',
    pageID: 'episode_info',
    episode: currentEpisode
  });

});

module.exports = router;
