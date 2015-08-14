function stacker_search_manager(){
	var input_name = window.location.search.substr(1);
	input_name = input_name.replace(/_/g, ' ');
	CNS.PATIENT_NAMES.forEach(function (name){
		if(name.trim() == input_name.trim()){
			CNS.STACKER.HTML.STACKER();
			CNS.STACKER.LOAD_DATA(name);
		}
	});
}