$(function() {
	$.ajax('/api/emails').done(function(res) {
		buildChart(res);
	});
});

function buildChart(data) {
	AmCharts.makeChart("chartdiv", {
		"type": "serial",
		"theme": "light",
		"pathToImages": "//cdn.amcharts.com/lib/3/images/",
		"categoryField": "category",
		"startDuration": 1,
		"categoryAxis": {
			"gridPosition": "start"
		},
		"trendLines": [],
		"graphs": [
			{
				"fillAlphas": 1,
				"id": "AmGraph-1",
				"title": "Sent emails",
				"type": "column",
				"valueField": "sent"
			},
			{
				"fillAlphas": 1,
				"id": "AmGraph-2",
				"title": "Delivered emails",
				"type": "column",
				"valueField": "delivered"
			},
			{
				"id": "AmGraph-3",
				"title": "Open emails",
				"valueField": "open"
			}
		],
		"guides": [],
		"valueAxes": [{
			"axisAlpha": 0,
			"minimum": 0,
		}],
		"allLabels": [],
		"balloon": {},
		"dataProvider": data
	});
}