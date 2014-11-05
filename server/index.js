var debug = require('debug')('weekly-report:main'),
	express = require('express'),
	app = express(),
	fs = require('fs'),
	config = require('./config'),
	Hubspot = require('hubspot'),
	hubspot = new Hubspot()
;

hubspot.useKey(config.apikey);

app.get('/', function(req, res, next) {
   fs.readFile("./client/index.html", function(err, index) {
   		if (err) {
   			res.send(err);
   			retur;
   		}

        res.set('Content-Type', 'text/html');
        res.send(index);
    });
});

app.get('/api/campaigns/:campaign/emails', function(req, res, next) {
	next();
});

app.get('/api/campaigns/:campaign/emails/:email', function(req, res, next) {
	next();
});


module.exports = app;