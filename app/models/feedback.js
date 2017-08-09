var mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
  "clientName": String,
  "clientEmail": String,
  "feedbackDate": Date,
  "feedbackTitle": String,
  "feedbackContent": String
});

var Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
