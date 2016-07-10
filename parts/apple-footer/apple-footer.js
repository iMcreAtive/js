var $ = require("jquery");
require("./apple-footer.css");

$('.footer-toggle').on('click', function(){
	if(window.innerWidth <= 720){
		$($(this).data('id')).toggle(200);
		$(this).toggleClass('active');
	}
});