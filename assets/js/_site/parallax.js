const $ = jQuery.noConflict();

'use strict';
const Parallax = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		$(window).on('scroll', function() {
			var wScroll = $(window).scrollTop();
			$('.js-parallax-bg').css('background-position', 'center ' + (wScroll * 0.75) + 'px');
		});
	  
	  
	  
    }
    
   
};

export default Parallax;