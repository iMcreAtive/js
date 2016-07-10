var $ = require("jquery");
require("./invision-form.css");

	function nameValid(name){
		return name.length >= 2 && name.length <= 16;
	}

	function emailValid(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function passValid(pass){
		return pass.length >= 4 && pass.length <= 16;
	}

	$('#invision-form').on('submit', function(e){

		var isNameValid = nameValid($('#invision-form input[name=name]').val());
		var isPassValid = passValid($('#invision-form input[name=email]').val());
		var isEmailValid = emailValid($('#invision-form input[name=pass]').val());
<<<<<<< HEAD

		console.log(isNameValid);
		console.log(isPassValid);
		console.log(isEmailValid);
=======
>>>>>>> master

		if(!isNameValid || !isPassValid || !isEmailValid){
			e.preventDefault();
			return false;
		}
	});

	$('#invision-form input[name=name]').on('change', function(event){ 
		var input = $(event.target);
		if(nameValid(input.val())){
			input.removeClass('invalid');
		} else {
			input.removeClass('invalid').addClass('invalid');
		}
	});
	$('#invision-form input[name=email]').on('change', function(event){
		var input = $(event.target);
		if(emailValid(input.val())){
			input.removeClass('invalid');
		} else {
			input.removeClass('invalid').addClass('invalid');
		}
	});
	$('#invision-form input[name=pass]').on('change', function(event){
		var input = $(event.target);
		if(passValid(input.val())){
			input.removeClass('invalid');
		} else {
			input.removeClass('invalid').addClass('invalid');
		}
	});