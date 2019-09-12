
import Sliders from './_site/sliders';
import HeaderFix from './_site/headerFix';
import Parallax from './_site/parallax';
import ScrollToSec from './_site/scrollToSec';
import NavBtn from './_site/navBtn';

jQuery(function () {
	// Slick Slider
	Sliders.init();

	//HeaderFix
	HeaderFix.init();

	//Parallax
	Parallax.init();

	//ScrollToSec
	ScrollToSec.init();

	//NavBtn
	NavBtn.init();

	console.log('hello');
});
