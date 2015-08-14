function load_names(){
	$.ajaxSetup({async:false});
	$.getJSON(CNS.PATIENT_FILE, function(data){
		CNS.PATIENT_NAMES = [];
		CNS.PATIENT_INFO = [];
		data.forEach(function (patient){
			CNS.PATIENT_INFO.push(patient.info);
			var name = patient.info.name;
			CNS.PATIENT_NAMES.push(CNS.FUNCTIONS.HR_NAME(name));
		});
	});
	$.ajaxSetup({async:true});
}

function load_autocomplete(){
	load_names();
	$( "#patient-search" ).autocomplete({
		source: CNS.PATIENT_NAMES,
		select: function (event, ui){
/*			CNS.STACKER.HTML.STACKER();
			CNS.STACKER.LOAD_DATA(ui.item.label);*/
			var hash_patient_name = ui.item.label.replace(/ /g, '_');
			window.location.replace("./index.html?"+hash_patient_name);
		}
	});
}