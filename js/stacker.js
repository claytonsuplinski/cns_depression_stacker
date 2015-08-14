function load_stacker_content(){
	var tmp = '<div class="intro-header">';
		tmp += '<div class="container">';
			tmp += '<div class="row">';
				tmp += '<div class="col-lg-12">';
					tmp += '<div class="intro-message">';
						tmp += '<h2 class="patient-name-title patient-name"></h2>';
						tmp += '<h4 class="patient-info-title">Age: <span class="patient-age"></span> | Gender: <span class="patient-gender"></span></h4>';
						tmp += '<h4 class="patient-info-title">Date of Birth: <span class="patient-date-of-birth"></span></h4><hr>';
						tmp += '<div id="timeline" style="width: 100%; height: 400px;"></div>';
					tmp += '</div>';
				tmp += '</div>';
				tmp += '<div class="col-lg-12 high-risk-times patient-panel">';
					tmp += '<div class="col-lg-12">';
						tmp += '<h4>High Risk Times</h4>';
						tmp += '<h6 class="patient-name"></h6>';
					tmp += '</div>';
					tmp += '<div id="high_risk_intervals_chart"></div>';
				tmp += '</div>';
				tmp += '<div class="col-lg-12 add-new-treatment patient-panel">';
					tmp += '<div class="col-lg-12">';
						tmp += '<h4>Add New Treatment</h4>';
						tmp += '<h6 class="patient-name"></h6>';
					tmp += '</div>';
					tmp += '<div class="col-lg-12">';
						tmp += '<input id="add-drug-name" placeholder="Drug Name"></input>';
					tmp += '</div>';
					tmp += '<div class="col-lg-12" style="z-index:10;">';
						tmp += '<div class="col-sm-4 col-xs-12">';
							tmp += '<label>Year</label>';
							tmp += '<select id="add-year-select" onchange="selectDate.year=parseInt(this.value);selectDate.update_select_all();"></select>';
						tmp += '</div>';
						tmp += '<div class="col-sm-4 col-xs-12">';
							tmp += '<label>Month</label>';
							tmp += '<select id="add-month-select" onchange="selectDate.month=parseInt(this.value);selectDate.update_select_all();"></select>';
						tmp += '</div>';
						tmp += '<div class="col-sm-4 col-xs-12">';
							tmp += '<label>Day</label>';
							tmp += '<select id="add-day-select" onchange="selectDate.day=parseInt(this.value);selectDate.update_select_all();"></select>';
						tmp += '</div>';
					tmp += '</div>';
					tmp += '<div class="col-lg-12" style="z-index:10;">';
						tmp += '<div class="col-sm-6 col-xs-12">';
						tmp += '<label>Hour</label>';
						tmp += '<select id="add-hour-select" onchange="selectDate.hour=parseInt(this.value);selectDate.update_select_all();"></select>';
					tmp += '</div>';
					tmp += '<div class="col-sm-6 col-xs-12">';
						tmp += '<label>Minute</label>';
						tmp += '<select id="add-minute-select" onchange="selectDate.minute=parseInt(this.value);selectDate.update_select_all();"></select>';
					tmp += '</div>';
				tmp += '</div>';
				tmp += '<div class="col-lg-12">';
					tmp += '<div class="btn btn-success">Add Treatment</div>';
				tmp += '</div>';
			tmp += '</div>';
			tmp += '<div class="col-lg-12 list-of-treatments patient-panel">';
				tmp += '<div class="col-lg-12">';
					tmp += '<h4>List of Treatments</h4>';
					tmp += '<h6 class="patient-name"></h6>';
				tmp += '</div>';
				tmp += '<div id="list_of_treatments_chart"></div>';
			tmp += '</div>';
		tmp += '</div>';
	tmp += '</div>';
	tmp += '</div>';
	
	$("#stacker").html(tmp);
}	

var curr_interval;
function load_stacker_data(name){
	$.getJSON(CNS.PATIENT_FILE, function(data){
		$("#timeline").html("");
		data.forEach(function (patient){
			if(CNS.FUNCTIONS.HR_NAME(patient.info.name) == name){
				$(".patient-name").html(name);
				var birth = patient.info.birth;
				$(".patient-date-of-birth").html(month_names[birth.month-1]+" "+birth.day+", "+birth.year);
				var birthday = new Date(birth.year, birth.month-1, birth.day);
				$(".patient-age").html(CNS.FUNCTIONS.AGE(birthday));
				var gender = patient.info.gender;
				$(".patient-gender").html(gender);
				CNS.STACKER.CHART.DRAW(patient.treatments);
			}
		});
	});
	clearInterval(curr_interval);
	curr_interval = setInterval(function(){CNS.STACKER.LOAD_DATA(name);}, 1000);
}