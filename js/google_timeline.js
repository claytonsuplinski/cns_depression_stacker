function init_timeline(){
  google.load("visualization", "1", {packages:["timeline"]});
}

function draw_timeline(drugs) {
	var container = document.getElementById('timeline');
	var chart = new google.visualization.Timeline(container);
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn({ type: 'string', id: 'Drug-Name' });
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });

	var chart_rows = [];
	for(var i=0; i<drugs.length; i++){

		var tmp_start_date = new Date(drugs[i].start.year, drugs[i].start.month-1, drugs[i].start.day, drugs[i].start.hour, drugs[i].start.minute);
		var tmp_end_date = new Date(drugs[i].end.year, drugs[i].end.month-1, drugs[i].end.day, drugs[i].end.hour, drugs[i].end.minute);
		if(tmp_end_date > now){
			if(now > tmp_start_date){
				tmp_start_date = now;
			}
			chart_rows.push([drugs[i].name, 
					tmp_start_date,
					tmp_end_date
			]);
		}
	}

	chart_rows.sort(function(a, b){
		var keyA = new Date(a[2]),
		keyB = new Date(b[2]);
		// Compare the 2 dates
		if(keyA < keyB) return -1;
		if(keyA > keyB) return 1;
		return 0;
	});

	chart_rows.sort(function(a, b){
		var keyA = new Date(a[1]),
		keyB = new Date(b[1]);
		// Compare the 2 dates
		if(keyA < keyB) return -1;
		if(keyA > keyB) return 1;
		return 0;
	});

	high_risk_times(chart_rows);
	list_of_treatments(chart_rows);

	if(chart_rows.length > 0){
		dataTable.addRows(chart_rows);
		  
			var options = {
				hAxis: {
					format: 'HH:mm\nM/d\nyyyy',
					gridlines: {count: 1}
				},
				timeline: { rowLabelStyle: {fontName: 'Open Sans', color: '#333' } }
			};

		$("#timeline").css("height", (40 * chart_rows.length + 80)+"px");
		chart.draw(dataTable, options);
	}
	else{
		$("#timeline").css("height", "100px");
		$("#timeline").html('<h2 class="alert-text">No Current Treatments</h2>');
	}
}