function load_patients_list(){
	var content = "";
	CNS.PATIENT_INFO.forEach(function (patient){
	
		var birth = patient.birth;
	
		content += '<div class="col-lg-12 edit-patients patient-panel">';
			content += '<div class="col-md-6">';
				content += '<h4>'+CNS.FUNCTIONS.HR_NAME(patient.name)+'</h4>';
			content += '</div>';
			content += '<div class="col-md-3 col-xs-12">';
				content += '<h4>Birth: ' + (month_names[birth.month-1]+" "+birth.day+", "+birth.year) + '</h4>';
			content += '</div>';
			content += '<div class="col-md-3 col-xs-12">';
				content += '<h4>Gender: '+patient.gender + '</h4>';
			content += '</div>';
		content += '</div><br><br>';
	});
	$("#list-of-patients").html(content);
}