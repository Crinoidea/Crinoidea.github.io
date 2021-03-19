$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></img></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></img></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false
				}
			}		
		]
	});
});