function high_risk_times(data){
	var high_risk_intervals = [];

	var all_interval_times = [];
	
	for(var i=0; i<data.length; i++){
		if(all_interval_times.indexOf(data[i][1]) == -1){
			all_interval_times.push(data[i][1]);
		}
		if(all_interval_times.indexOf(data[i][2]) == -1){
			all_interval_times.push(data[i][2]);
		}
	}	
	
	all_interval_times.sort(function(a, b){
		var keyA = new Date(a),
		keyB = new Date(b);
		// Compare the 2 dates
		if(keyA < keyB) return -1;
		if(keyA > keyB) return 1;
		return 0;
	});
	
	for(var i=0; i<all_interval_times.length-1; i++){
		if(all_interval_times[i+1] - all_interval_times[i] > 0){
			var interval_depth = 0;
			for(var j=0; j<data.length; j++){
				if(withinInterval(all_interval_times[i], all_interval_times[i+1], data[j][1], data[j][2])){
					interval_depth++;
					if(interval_depth >= CNS.VARS.HIGH_RISK_THRESHOLD){
						break;
					}
				}
			}
			if(interval_depth >= CNS.VARS.HIGH_RISK_THRESHOLD){
				high_risk_intervals.push([all_interval_times[i], all_interval_times[i+1]]);
			}
		}
	}
	
	for(var i=0; i<high_risk_intervals.length-1; i++){
		if(high_risk_intervals[i][1] <= new Date()){
			high_risk_intervals.splice(i, 1);
			i--;
		}
		else if(high_risk_intervals[i][1].getTime() == high_risk_intervals[i+1][0].getTime()){
			high_risk_intervals[i][1] = high_risk_intervals[i+1][1];
			high_risk_intervals.splice(i+1, 1);
			i--;
		}
	}
	
	var currently_high_risk = false;
	var tmpTable = '<table class="table table-bordered table-striped"><tr><th>Start</th><th>End</th></tr>';
	high_risk_intervals.forEach(function(i){
		if(!currently_high_risk){
			if(withinInterval(new Date(), new Date(), i[0], i[1])){
				currently_high_risk = true;
				$(".intro-header").css("background", "#EAB0B0");
			}
		}
		tmpTable += '<tr><td>'+CNS.FUNCTIONS.HR_DATETIME(i[0])+'</td><td>'+CNS.FUNCTIONS.HR_DATETIME(i[1])+'</td></tr>';
	});
	if(!currently_high_risk){
		$(".intro-header").css("background", "#E3E3E3");
	}
	tmpTable += '</table>';
	$("#high_risk_intervals_chart").html(tmpTable);	

}

function withinInterval(interval_start, interval_end, drug_start, drug_end){
	return (drug_start <= interval_start && drug_end >= interval_end);
}

function list_of_treatments(data){
	var tmpTable = '<table class="table table-bordered table-striped"><tr><th>Drug</th><th>Time Left</th><th>Remove</th></tr>';
	data.forEach(function(i){
		var tmpTimeUntil = CNS.FUNCTIONS.TIME_UNTIL(i[2]);
		if(tmpTimeUntil != "-"){
			tmpTable += '<tr><td>'+i[0]+'</td><td>'+tmpTimeUntil+'</td><td class="remove-treatment"><i class="fa fa-close"></i></td></tr>';
		}
	});
	tmpTable += '</table>';
	$("#list_of_treatments_chart").html(tmpTable);
}