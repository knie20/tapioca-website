var express = require('express');
var reload = require('reload');
var episodeDataFile = require('./data/episodes.json')

var app = express();

app.set('port', process.env.PORT || 3000 );
app.set('episodeData', episodeDataFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.locals.siteTitle = 'Tapioca Radio Show';

app.use(express.static('app/public'));
app.use(require('./routes/index'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
