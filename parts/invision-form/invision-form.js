var $ = require("jquery");
require("./invision-form.css");

	function nameValid(){
		var name = $("#invision-form input[name=name]").val();
		var valid = false;

		if(name.length >= 2 && name.length <= 16){
			if($("#invision-form input[name=name]").hasClass('invalid')) $("#invision-form input[name=name]").removeClass('invalid'); 
			$("#invision-form input[name=name]").addClass('valid');
			valid = true;
		} else {
			if($("#invision-form input[name=name]").hasClass('valid')) $("#invision-form input[name=name]").removeClass('valid');
			$("#invision-form input[name=name]").addClass('invalid');
		}

		return valid;
	}

	function emailValid(){
		var email = $("#invision-form input[name=email]").val();
		var valid = false;

		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(re.test(email)){
			if($("#invision-form input[name=email]").hasClass('invalid')) $("#invision-form input[name=email]").removeClass('invalid'); 
			$("#invision-form input[name=email]").addClass('valid');
			valid = true;
		} else {
			if($("#invision-form input[name=email]").hasClass('valid')) $("#invision-form input[name=email]").removeClass('valid');
			$("#invision-form input[name=email]").addClass('invalid');
		}

		return valid;
	}

	function passValid(){
		var pass = $("#invision-form input[name=pass]").val();
		var valid = false;

		if(pass.length >= 4 && pass.length <= 16){
			if($("#invision-form input[name=pass]").hasClass('invalid')) $("#invision-form input[name=pass]").removeClass('invalid'); 
			$("#invision-form input[name=pass]").addClass('valid');
			valid = true;
		} else {
			if($("#invision-form input[name=pass]").hasClass('valid')) $("#invision-form input[name=pass]").removeClass('valid');
			$("#invision-form input[name=pass]").addClass('invalid');
		}

		return valid;
	}

	$('#invision-form').on('submit', function(e){
		var test  = 0;
		var valid = 3;

		if(nameValid())  test++;
		if(emailValid()) test++;
		if(passValid())  test++;

		if(test != valid){
			e.preventDefault();
			return false;
		}
	});

	$('#invision-form input[name=name]').on('change', function(){ nameValid() });
	$('#invision-form input[name=email]').on('change', function(){ emailValid() });
	$('#invision-form input[name=pass]').on('change', function(){ passValid() });