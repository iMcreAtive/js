var $ = require("jquery");
require("./invision-form.css");

	// form controls
	var inputName  = $('#invision-form input[name=name]');
	var inputEmail = $('#invision-form input[name=email]');
	var inputPass  = $('#invision-form input[name=pass]');

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

		var isNameValid = nameValid(inputName.val());
		var isPassValid = passValid(inputPass.val());
		var isEmailValid = emailValid(inputEmail.val());

		if(!isNameValid || !isPassValid || !isEmailValid){
			e.preventDefault();
			return false;
		}
	});

	function setNameClass(valid){
		if(valid){
			inputName.removeClass('invalid');
		} else {
			inputName.addClass('invalid');
		}

		return valid;
	}

	function setEmailClass(valid){
		if(valid){
			inputEmail.removeClass('invalid');
		} else {
			inputEmail.addClass('invalid');
		}

		return valid;
	}

	function setPassClass(valid){
		if(valid){
			inputPass.removeClass('invalid');
		} else {
			inputPass.addClass('invalid');
		}

		return valid;
	}

	inputName.on('change', function(event){ 
		nameValid($(event.target).val());
	});
	inputEmail.on('change', function(event){
		emailValid($(event.target).val());
	});
	inputPass.on('change', function(event){
		passValid($(event.target).val());
	});