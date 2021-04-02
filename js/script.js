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
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	speed: 800,
	navPosition: "bottom",
	responsive: {
		320: {
			nav: true
		},

		992: {
			nav: false
		}
	}
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







	/* Модальные окна c помощью jQuery */

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow')
	});
	
	$('.button_mini').each(function(i)  {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

/* 	fadeIn - появление элемента
	fadeOut - исчезание элемента
	кликаем на кнопки с data-modal=consultationб включаются или выключаются блоки с .overlay, #consultation, #order, #thanks
	slow - скорость анимации

	При клике на .button_mini открывается модальное окно
	each для каждой кнопки с определенным элементом i 
	this - кнопка на которую нажали
	внутри модального окна #order есть .modal__descr, в который записываем другой текст из .catalog-item__subtitle
	eq(i) - заменяем текст для определенного элемента  */






	/* Валидация форм */

	function validateForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите своё имя",
					minlength: jQuery.validator.format("Введите {0} символа")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
				required: "Пожалуйста, введите свой почтовый адрес",
				email: "Неправильно введён почтовый адрес"
				}
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

/* Подключаем jquery.validate.min.js
#consultation form - в блоке с id consultation находит форму
#consultation-form - задаем id непосредственно <form>, поскольку родительский блок - это контейнер
Обязательно нужно указывать name="email" и т.п., посколько выше идёт отсылка к этому атрибуту
messages: - сообщения, которые появляются, если поле не заполненое
Застилизовать всплывающие сообщения - .error, label.error, эти классы можно так же поменять (см. документацию) 
В конце подставляем классы под универсальную функцию*/





/* Маска ввода номера на сайте */

$('input[name=phone]').mask("+7 (999) 999-9999");

/* Подключаем jquery.maskedinput.min.js
Для корректной работы удаляем у <input> - type='number' */


})(jQuery);