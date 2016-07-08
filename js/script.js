$(document).ready(function(){
	
	/**** navigation ****/

	$('nav ul li.dropdown > a.expand').on('click', function(){
		if(!$(this).parent('li.dropdown').hasClass('active')){
			$("li.dropdown.active").children("ul").slideUp(100);
			$("li.dropdown.active").removeClass("active");
		}
		
		$(this).parent('li.dropdown').addClass('active');
		$(this).parent('li.dropdown').children("ul").slideToggle(200);

		hideAccount();
		
		return false;
	});

	$('nav ul li.dropdown ul li.dropright a.expand').on('click', function(){
		if($('.mobile-btn').hasClass('active')) $(this).parent('li.dropright').children("ul").slideToggle(200);
		
		return false;
	});

	$(".account-btn").on('click', function(){
		hideMenu();

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			if(window.innerWidth <= 900) $('body').css({'overflow': 'auto'});
		} else {
			$(this).addClass('active');
			if(window.innerWidth <= 900) $('body').css({'overflow': 'hidden'});
		} 
		
		$('.user-card').slideToggle(200);
		
		return false;
	});

	$('body').on('click', function(){
		hideAccount();
		if(!$(this).hasClass('expand')) hideMenu();
	});

	$('.mobile-search .rf').on('click', function(){
		return false;
	});

	$('.mobile-btn').on('click', function(){
		hideAccount();

		if($(this).hasClass('active')){
			$('body').css({'overflow': 'auto'});
			$(this).removeClass('active');
		} else {
			$('body').css({'overflow': 'hidden'});
			$(this).addClass('active');
		}
		$('ul.left-btns').slideToggle(200);

		return false;
	});


	function setMobileNavHeight(){
		if(window.innerWidth <= 900) $('ul.left-btns, .user-card').css({'height': (window.innerHeight-48)+'px'});
		else { $('ul.left-btns').css({'height': '49px'}); $('.user-card').css({'height': 'auto'}); $('ul.left-btns').show(); }
	}
	function hideAccount(){
		if($(".account-btn").hasClass('active')) {
			$('.user-card').slideUp(200);
			$(".account-btn").removeClass('active');
			$('body').css({'overflow': 'auto'});
		}
	}
	function hideMenu(){
		if($('.mobile-btn').hasClass('active')){
			$('ul.left-btns').slideUp(100);
			$('.mobile-btn').removeClass('active');
		}
		$('body').css({'overflow': 'auto'});
		$("li.dropdown.active").children("ul").slideUp(100);
	}

	/**** /navigation ****/

	/**** invision form validation ****/

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

	/**** /invision form validation ****/

	/**** apple footer ****/

	$('.footer-toggle').on('click', function(){
		if(window.innerWidth <= 720){
			$($(this).data('id')).toggle(200);
			if($(this).hasClass('active')) $(this).removeClass('active'); else $(this).addClass('active');
		}
	});

	/**** /apple footer ****/


	$(function(){ setMobileNavHeight(); });
	$(window).resize(function() { setMobileNavHeight(); if(window.innerWidth >= 720) $("#apple ul").show(); });

});