const $ = jQuery.noConflict();

'use strict';
const AnimateOnScroll = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        $(window).scroll(function(){
            var wScroll = $(this).scrollTop();

            if(wScroll > $('.skills__wrapp').offset().top - ($(window).height() / 1.2)) {

                $('.skill__item').each(function(i){
    
                    setTimeout(function(){
                        $('.skill__item').eq(i).addClass('is-showing');
                    }, 150 *(i+1));
                });
            }
        });
    }
};

export default AnimateOnScroll;