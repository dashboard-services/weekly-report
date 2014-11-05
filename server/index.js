var debug = require('debug')('weekly-report:main'),
	express = require('express'),
	app = express(),
	fs = require('fs')
	hubspot = require('./lib/hubspot')
;

app.use('/', express.static(__dirname + '/../client/public'));

app.get('/', function(req, res, next) {
   fs.readFile("./client/index.html", function(err, index) {
   		if (err) {
   			res.send(err);
   			return;
   		}

        res.set('Content-Type', 'text/html');
        res.send(index);
    });
});

app.get('/api/emails', function(req, res, next) {
	res.send(hubspot.getAll());
});

module.exports = app;