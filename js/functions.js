function calculate_age(birthday) {
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function time_until(tmpTime) {
	var ageDifMs = tmpTime.getTime() - Date.now();
	if(ageDifMs <= 0){
		return "-";
	}
	ageDifMs /= 1000;
	if(ageDifMs < 60){
		return Math.ceil(ageDifMs) + "s";
	}
	ageDifMs /= 60;
	if(ageDifMs < 60){
		return Math.ceil(ageDifMs) + "m";
	}
	ageDifMs /= 60;
	if(ageDifMs < 24){
		return Math.ceil(ageDifMs) + "h";
	}
	return Math.ceil(ageDifMs/24) + "d";
}

function human_readable_datetime(d){
	return month_names[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " " + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
}

function human_readable_name(name){
	return name.first + " " + name.middle + " " + name.last + ( name.suffix != "" ? " " + name.suffix : "");
}