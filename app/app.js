var express = require('express');
var reload = require('reload');
var episodeDataFile = require('./data/episodes.json')

// const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
mongoose.connect('mongodb://<tapioca-test>:<1234>@ds061355.mlab.com:61355/tapioca-test');
var db = mongoose.connection;

var app = express();
var server;

app.set('port', process.env.PORT || 3000 );
app.set('episodeData', episodeDataFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.locals.siteTitle = 'Tapioca Radio Show';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/episodes'));
app.use(require('./routes/feedback'));

// start server
// MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds061355.mlab.com:61355/tapioca-test', function(err, database) {
//
// });

server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
