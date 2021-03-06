$(function() {
	$.ajax('api/emails').done(function(res) {
		buildChart(res);
		$('#chartdiv a').remove();
	});
});

function buildChart(data) {
	AmCharts.makeChart("chartdiv",
		{
			"type": "serial",
			"theme": "light",
			"autoMargins": false,
			"marginLeft":50,
			"marginRight":10,
			"marginTop":10,
			"marginBottom":26,

			"valueAxes": [{
				"axisAlpha": 0,
				"position": "left",
				"minimum": 0
			}],
			"startDuration": 1,

			"graphs": [{
				"balloonText": "[[title]]:[[value]]",
				"fillAlphas": 1,
				"id": "AmGraph-1",
				"title": "Delivered",
				"type": "column",
				"valueField": "delivered"
			},
			{
				"balloonText": "[[title]]:[[value]]",
				"fillAlphas": 1,
				"id": "AmGraph-2",
				"title": "Open",
				"type": "column",
				"valueField": "open"
			}],

			"categoryField": "category",

			"categoryAxis": {
				"gridPosition": "start",
				"axisAlpha": 0,
				"tickLength": 0
			},
			"dataProvider": data,
			"trendLines": []
		}
	);
}
