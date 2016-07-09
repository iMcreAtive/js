var $ = require("jquery");
require("./navigation.css");

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