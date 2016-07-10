var $ = require("jquery");
require("./apple-footer.css");

// af
$('.footer-toggle').on('click', function(){
	if(window.innerWidth <= 720){
		$($(this).data('id')).toggle(200);
		if($(this).hasClass('active')) $(this).removeClass('active'); else $(this).addClass('active');
	}
});