var debug = require('debug')('weekly-report:main'),
  express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require( 'path' ),
  hubspot = require('./lib/hubspot'),
  chartsConverter = require('./lib/amchartsconverter');
;

app.use('/', express.static(__dirname + '/../client/public'));

app.get('/', function(req, res, next) {
  res.set('Content-Type', 'text/html');
  fs.createReadStream( path.join( __dirname, '..', 'client', 'index.html' ) ).pipe( res );
});

app.get('/api/emails', function(req, res, next) {
  res.send(chartsConverter.convert(hubspot.getAll()));
});

module.exports = app;
