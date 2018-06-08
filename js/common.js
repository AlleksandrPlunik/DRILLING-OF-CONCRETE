$(document).ready(function(){
  $('.slider').slick({
  slidesToShow: 3,
  infinite: true,
  nextArrow: '.slick-next',
  prevArrow: '.slick-prev',
  speed: 300,
    autoplay: true,
    slidesToScroll: 1,

 });
  $('.slider-second').slick({
  slidesToShow: 1,
  infinite: true,
  nextArrow: '<i class="fa fa-angle-right fyrnityre-arrow" aria-hidden="true"></i>',
  prevArrow: '<i class="fa fa-angle-left fyrnityre-arrow" aria-hidden="true"></i>',
  speed: 600
 });
 $("a.fancyimage").fancybox();
 $("a.fancyimage-second").fancybox({
 	'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false});
});

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});