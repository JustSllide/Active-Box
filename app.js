$(function() {


// Fixed Header

	let intro = $('#intro');
	let header = $('#header');
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();



	$(window).on('scroll load resize', function() {

		scrollPos = $(this).scrollTop()
if(scrollPos > introH) {
	header.addClass('fixed');	
} else {
	header.removeClass('fixed');	
}
	});

// Smooth scroll

$('[data-scroll]').on('click', function(event) {
	event.preventDefault();

	let blockId = $(this).data('scroll');
	let elementOffset = $(blockId).offset().top;

	console.log(elementOffset);
	
	$('html, body').animate({
	scrollTop: elementOffset - 70
}, 700)

});

});

// Sllider        https://kenwheeler.github.io/slick/

let slider = $('#reviewsSlider');


slider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade:true,
	arrows: false,
	dots: true,
  });
		  