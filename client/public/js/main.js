$(function() {
	$.ajax('/asd').done(function(res) {
		console.log(res);
	});
});


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
				"title": "graph 1",
				"type": "column",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"fillAlphas": 1,
				"id": "AmGraph-2",
				"title": "graph 2",
				"type": "column",
				"valueField": "column-2"
			},
			{
				"id": "AmGraph-3",
				"title": "graph 3",
				"valueField": "column-3"
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Axis title"
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
		"dataProvider": [
			{
				"category": "category 1",
				"column-1": 8,
				"column-2": 5,
				"column-3": 3
			},
			{
				"category": "category 2",
				"column-1": 6,
				"column-2": 7,
				"column-3": 89
			},
			{
				"category": "category 3",
				"column-1": 2,
				"column-2": 3,
				"column-3": 74
			}
		]
	}
);