var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    "isAnonymous": Boolean,
    "commenterName": String,
    "commentDate": Date,
    "commentContent": String
});

var comment = mongoose.model('Comment', commentSchema);

module.exports = comment;
