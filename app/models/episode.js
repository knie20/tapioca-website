var mongoose = require('mongoose');

var episodeSchema = new mongoose.Schema({
  "episodeNumber": Number,
  "episodeTitle": String,
  "soundUri": String,
  "trackNumber": String,
  "artworkUri": String,
  "releaseDate": Date,
  "guests": [
      {
          "name": String,
          "description": String
      }
  ],
  "timestamps": [
      {
          "time": String,
          "description": String
      }
  ],
  "episodeDescription": String
});

var Episode = mongoose.model('Episode', EpisodeSchema);

module.exports = Episode;
