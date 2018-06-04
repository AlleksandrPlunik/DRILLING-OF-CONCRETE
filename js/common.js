$(document).ready(function(){
  $('.slider').slick({
  slidesToShow: 1,
  infinite: true,
  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
  speed: 300
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