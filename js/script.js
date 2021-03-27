/* Вариант слайдеров с помощью jQuery */
/* $(document).ready(function(){
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
}); */

/* Вариант слайдеров с помощью TinySlider */
var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
	controls: false,
	nav: false,
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});





/* Переключение табов и их контента c помощью jQuery */
(function($) {
	$(function() {
		
		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
		
/* 		on('click', 'li:not(.catalog__tab_active)' - кликаем на li, c активным классом

		this - ссылается на элемент, на который только что нажали (например на второй таб)
		
		Связанное с самими табами
		.addClass('catalog__tab_active')  - нажали на класс, который не активен и добавили ему класс активности
		.siblings().removeClass('catalog__tab_active') - все соседние классы удаляют класс активности
		
		Связанное с контентом табов
		.closest('div.container') - находит ближайший элемент
		find('div.catalog__content') - внутри контейнера находит класс
		removeClass('catalog__content_active') - внутри элементов, который нашли удаляется активный класс
		eq($(this).index()) - получает номер элемента, на который мы нажали (например на второй таб)
		.addClass('catalog__content_active') - и у этого элемента добавляется класс активности
 */




		
/* Полный вариант переключения карточек c помощью jQuery */
		/* $('.catalog-item__link').each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});

		$('.catalog-item__back').each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});  */
		
		/* .each(function(i) - для каждого элемента с аргументом і 
		$(this) - ссылаемся на каждый элемент, который перебирается
		on('click', function(e) - пользователь кликает на ссылку

		e.preventDefault() - отменяем стандартное поведение браузера, и задаем новое - при клике на ссылку, происходит другое действие (для этого нужно обязательно function(e))
		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active') - при клике на кнопку, должен переключаться класс на активный
		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active') - тоже самое (но действителен сразу только один класс активности, поскольку в html один класс активный, второй - нет)
		eq(i) - при клике будут срабатывать не сразу все классы, а именно на который клинули */
		
	});






/* Оптимизированый вариант переключения карточек c помощью jQuery (полный вариант выше)
Вместо item подставляется наш класс
*/
	function toggleSlide(item) { 
		$(item).each(function(i) {
			$(this).on('click', function(e) { 
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

})(jQuery);