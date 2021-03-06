var debug = require('debug')('Weekly-report:AmChartsConverter'),
	moment = require('moment');

module.exports = {
	convert: function convert(list) {
		return list.sort(function(a, b){
			var atime = a.name.split(' ').pop(),
				btime = b.name.split(' ').pop();

			return atime - btime;
		}).map(function(item) {
			var timestamp = item.name.split(' ').pop();

			return {
				'category': moment(timestamp, 'YYYYMMDD').format('DD/MM/YYYY'),
				'delivered': item.stats.delivered,
				'open': item.stats.open,
			};
		}).reverse().slice(0, 4);

	}
}