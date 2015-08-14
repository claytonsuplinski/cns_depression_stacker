function load_treatments_list(){
	$.getJSON(CNS.TREATMENTS_FILE, function(data){
		var content = "";
		
		data.forEach(function (treatment){
			content += '<div class="col-lg-12 treatment-panel">';
				content += '<div class="col-md-6">';
					content += '<h4>'+treatment.name+'</h4>';
				content += '</div>';
				content += '<div class="col-md-3 col-xs-12 treatment-duration">';
					content += '<h4>Duration : '+treatment.duration+' hrs</h4>';
				content += '</div>';
			content += '</div><br><br>';
		
		});

		$("#list-of-treatments").html(content);
	});
}