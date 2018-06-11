(function ($) {
	let $slider1 = $('.slider');
	$(window).on('resize', function () {
		if ($slider1.attr('data-init')) $slider1.slick('unslick');
		$slider1.attr('data-init',true);
		let slidesCount = 3;
		let sliderWidth = $('.slider-container').width();
		if (sliderWidth < 1200) slidesCount = 2;
		if (sliderWidth < 800) slidesCount = 1;
		$slider1.slick({
			slidesToShow: slidesCount,
			infinite: true,
			nextArrow: '.slick-next',
			prevArrow: '.slick-prev',
			speed: 300,
			autoplay: true,
			slidesToScroll: 1,
		});


	}).trigger('resize');

  let $slider2 = $('.slider_1');
  $(window).on('resize', function () {
    if ($slider2.attr('data-init')) $slider1.slick('unslick');
    $slider1.attr('data-init',true);
    let slidesCount = 3;
    let sliderWidth = $('.slider-container').width();
    if (sliderWidth < 1200) slidesCount = 2;
    if (sliderWidth < 800) slidesCount = 1;
    $slider2.slick({
      slidesToShow: slidesCount,
      infinite: true,
      nextArrow: '.s-next',
      prevArrow: '.s-prev',
      speed: 300,
      autoplay: true,
      slidesToScroll: 1,
    });


  }).trigger('resize');

})(jQuery);

	// $("a.fancyimage").fancybox();
	// $("a.fancyimage-second").fancybox({
	// 	'transitionIn': 'elastic',
	// 	'transitionOut': 'elastic',
	// 	'speedIn': 600,
	// 	'speedOut': 200,
	// 	'overlayShow': false
	// });
// });
//
// $('.autoplay').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
// });