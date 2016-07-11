var $ = require("jquery");

function setMobileNavHeight(){
	if(window.innerWidth <= 900) $('ul.left-btns, .user-card').css({'height': (window.innerHeight-48)+'px'});
	else { $('ul.left-btns').css({'height': '49px'}); $('.user-card').css({'height': 'auto'}); $('ul.left-btns').show(); }
}

$(function(){ setMobileNavHeight(); });
$(window).resize(function() { setMobileNavHeight(); if(window.innerWidth >= 720) { $("#apple ul").show(); $('.footer-toggle').removeClass('active'); } else $("#apple ul").hide(); });