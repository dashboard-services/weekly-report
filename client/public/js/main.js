$(function() {
	$.ajax('/api/emails').done(function(res) {
		buildChart(res);
	});
});

function buildChart(data) {
	AmCharts.makeChart("chartdiv",
		{
			"type": "serial",
			"pathToImages": "//cdn.amcharts.com/lib/3/images/",
			"categoryField": "category",
			"startDuration": 1,
			"categoryAxis": {
				"gridPosition": "start"
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-1",
					"title": "Sent emails",
					"type": "column",
					"valueField": "sent"
				},
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
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
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"title": "N. of emails"
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"useGraphSettings": true
			},
			"titles": [
				{
					"id": "Title-1",
					"size": 15,
					"text": "Weekly report data"
				}
			],
			"dataProvider": data
		}
	);
}