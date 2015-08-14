function load_welcome_content(){
	var tmp = '<div class="home-header">';
		tmp += '<div class="container">';
			tmp += '<div class="row">';
				tmp += '<div class="col-lg-12">';
					tmp += '<div class="home-message">';
						tmp += '<h2>';
							tmp += '<span class="hidden-xs hidden-sm">Welcome to the CNS Depression Stacker</span>';
							tmp += '<span class="hidden-md hidden-lg">CNS<br>Depression<br>Stacker</span>';
						tmp += '</h2>';
						tmp += '<h4 class="hidden-xs hidden-sm">Use the Search Bar to Find Patients</h4>';
					tmp += '</div>';
				tmp += '</div>';
			tmp += '</div>';
		tmp += '</div>';
	tmp += '</div>';
	
	$("#stacker").html(tmp);
}

