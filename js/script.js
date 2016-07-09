$(document).ready(function(){

	/**** apple footer ****/

	$('.footer-toggle').on('click', function(){
		if(window.innerWidth <= 720){
			$($(this).data('id')).toggle(200);
			if($(this).hasClass('active')) $(this).removeClass('active'); else $(this).addClass('active');
		}
	});

	/**** /apple footer ****/


	function setMobileNavHeight(){
		if(window.innerWidth <= 900) $('ul.left-btns, .user-card').css({'height': (window.innerHeight-48)+'px'});
		else { $('ul.left-btns').css({'height': '49px'}); $('.user-card').css({'height': 'auto'}); $('ul.left-btns').show(); }
	}

	$(function(){ setMobileNavHeight(); });
	$(window).resize(function() { setMobileNavHeight(); if(window.innerWidth >= 720) $("#apple ul").show(); });

});