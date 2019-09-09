const $ = jQuery.noConflict();

'use strict';
const ScrollToSec = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		$('.main-nav__link').on('click',function(e){
            e.preventDefault();

            var target = $(this).attr('data-id');
            var targetClass = $('.' + target);

            $('html, body').animate({
                'scrollTop': targetClass.offset().top
			}, 1000);
			
			$('main-nav__item').on('click',function(){
				$(this).addClass('active').sibling().removeClass('active');
			})
        })
	}
};

export default ScrollToSec;