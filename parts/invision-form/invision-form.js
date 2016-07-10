var $ = require("jquery");
require("./invision-form.css");

	function nameValid(name){
		return setNameClass(name.length >= 2 && name.length <= 16);
	}

	function emailValid(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return setEmailClass(re.test(email));
	}

	function passValid(pass){
		return setPassClass(pass.length >= 4 && pass.length <= 16);
	}

	$('#invision-form').on('submit', function(e){

		var isNameValid = nameValid($('#invision-form input[name=name]').val());
		var isPassValid = passValid($('#invision-form input[name=pass]').val());
		var isEmailValid = emailValid($('#invision-form input[name=email]').val());

		if(!isNameValid || !isPassValid || !isEmailValid){
			e.preventDefault();
			return false;
		}
	});

	function setNameClass(valid){
		if(valid){
			$('#invision-form input[name=name]').removeClass('invalid');
		} else {
			$('#invision-form input[name=name]').addClass('invalid');
		}

		return valid;
	}

	function setEmailClass(valid){
		if(valid){
			$('#invision-form input[name=email]').removeClass('invalid');
		} else {
			$('#invision-form input[name=email]').addClass('invalid');
		}

		return valid;
	}

	function setPassClass(valid){
		if(valid){
			$('#invision-form input[name=pass]').removeClass('invalid');
		} else {
			$('#invision-form input[name=pass]').addClass('invalid');
		}

		return valid;
	}

	$('#invision-form input[name=name]').on('change', function(event){ 
		nameValid($(event.target).val());
	});
	$('#invision-form input[name=email]').on('change', function(event){
		emailValid($(event.target).val());
	});
	$('#invision-form input[name=pass]').on('change', function(event){
		passValid($(event.target).val());
	});