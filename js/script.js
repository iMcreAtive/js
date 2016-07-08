$(document).ready(function(){
	$('nav ul li.dropdown a.expand').on('click', function(){
		if(!$(this).parent('li.dropdown').hasClass('active')){
			$("li.dropdown.active").children("ul").slideUp(100);
			$("li.dropdown.active").removeClass("active");
		}
		
		$(this).parent('li.dropdown').addClass('active');
		$(this).parent('li.dropdown').children("ul").slideToggle(200);
		
		return false;
	});

	$(".account-btn").on('click', function(){
		if($(this).hasClass('active')) $(this).removeClass('active'); else $(this).addClass('active');
		$('.user-card').slideToggle(200);
		return false;
	});

	$('body').on('click', function(){
		$("li.dropdown.active").children("ul").slideUp(100);
		if($(".account-btn").hasClass('active')) {
			$('.user-card').slideUp(200);
			$(".account-btn").removeClass('active');
		}
	});

	$('.mobile-btn').on('click', function(){
		if($(this).hasClass('active')){
			$('html, body').css({'overflow': 'auto'});
			$(this).removeClass('active');
		} else {
			$('html, body').css({'overflow': 'hidden'});
			$(this).addClass('active');
		}
		$('ul.left-btns').slideToggle(200);

		return false;
	});

	$(function(){
		$('ul.left-btns').css({'height': (window.innerHeight-50)+'px'});
	});

	$( window ).resize(function() {
		$('ul.left-btns').css({'height': (window.innerHeight-50)+'px'});
	});
});