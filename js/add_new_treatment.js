var month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function daysInMonth(month,year) {
    return new Date(year, month+1, 0).getDate();
}

function SelectDate(tmpDate){
	this.year = tmpDate.getFullYear();
	this.month = tmpDate.getMonth();
	this.day = tmpDate.getDate();
	this.hour = tmpDate.getHours();
	this.minute = tmpDate.getMinutes();
	this.year_range = [(this.year-1), this.year, (this.year+1)];
	
	this.add_year_select = function(){
		var tmpSelect = "";
		for(var i=0; i<this.year_range.length; i++){
			tmpSelect += '<option '+(this.year == this.year_range[i] ? 'selected' : '')+'>'+this.year_range[i]+'</option>';
		};
		$("#add-year-select").html(tmpSelect);
	};
	
	this.add_month_select = function(){
		var tmpSelect = "";
		for(var i=0; i<month_names.length; i++){
			tmpSelect += "<option "+(i == this.month ? "selected" : "")+" value='"+i+"'>"+month_names[i]+"</option>";
		}
		$("#add-month-select").html(tmpSelect);
	};
	
	this.add_day_select= function(){
		var tmpSelect = "";
		for(var i=0; i<daysInMonth(this.month, this.year); i++){
			tmpSelect += "<option "+(i == (this.day-1) ? "selected" : "")+">"+(i+1)+"</option>";
		}
		$("#add-day-select").html(tmpSelect);
	};
	
	this.add_hour_select= function(){
		var tmpSelect = "";
		for(var i=0; i<24; i++){
			tmpSelect += "<option "+(i == this.hour ? "selected" : "")+">"+i+"</option>";
		}
		$("#add-hour-select").html(tmpSelect);
	};
	
	this.add_minute_select= function(){
		var tmpSelect = "";
		for(var i=0; i<60; i++){
			tmpSelect += "<option "+(i == this.minute ? "selected" : "")+">"+i+"</option>";
		}
		$("#add-minute-select").html(tmpSelect);
	};
	
	this.update_select_all = function(){
		this.add_year_select();
		this.add_month_select();
		this.add_day_select();
		this.add_hour_select();
		this.add_minute_select();
	}
}

var now = new Date();
var selectDate = new SelectDate(now);
selectDate.update_select_all();