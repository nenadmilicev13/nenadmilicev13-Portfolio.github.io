const $ = jQuery.noConflict();

'use strict';
const HeaderFix = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.main-header').addClass('header-fixed');
            } else {
                $('.main-header').removeClass('header-fixed');
            }
        });
    }
    
   
};

export default HeaderFix;