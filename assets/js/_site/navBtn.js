const $ = jQuery.noConflict();

'use strict';
const navBtn = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        var mainHeaderBtn = $('.js-main-header-btn');
		var mainNav = $('.js-main-nav');
        
		if ($(window).width() < 1025) {
			mainHeaderBtn.on('click', function() {
				mainNav.slideToggle();
			});
		}
		
	}
};

export default navBtn;