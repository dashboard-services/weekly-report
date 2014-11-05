var debug = require('debug')('Weekly-report:hubspot'),
	config = require('../config'),
	Hubspot = require('hubspot'),
	hubspot = new Hubspot(),
	data = []
;

hubspot.useKey(config.apikey);

setInterval(updateHubspotInfo, 3600000); // 1 hour.

var updateHubspotInfo = function updateHubspotInfo() {
	debug('Updating Hubspot charts statistics');
	hubspot.campaigns.get({limit: config.limit}, function(err, response) {
		if (err) {
			debug(err);
			return;
		}

		response.campaigns.forEach(function(campaign, index) {
			if (campaign.appId != config.campaignId) { return; }

			hubspot.campaigns.getOne(campaign.id, function(err, response) {
				if (err) {
					debug(err);
					return;
				}

				if (typeof response.name === 'undefined') { return; }

				campaign.name = response.name;
				campaign.subject = response.subject;
				campaign.stats = response.counters;

				data.push(campaign);
			});
		});
	});
};


//Execute on server start. dont wait 1 hour :(
updateHubspotInfo();

module.exports = {
	getAll: function getAll() {
		return data;
	}
};