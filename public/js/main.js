var mySwiper = new Swiper('.s-logo-brands__slider', {
	slidesPerView: 6,
	navigation: {
		prevEl: '.s-logo-brands__prev',
		nextEl: '.s-logo-brands__next'
	},
	breakpoints: {
		1200: {
			slidesPerView: 5
		},
		992: {
			slidesPerView: 4
		},
		768: {
			slidesPerView: 3
		}
	}
});

var catalog = new Swiper('.s-catalog-news__slider', {
	slidesPerView: 2,
	spaceBetween: 10,
	navigation: {
		prevEl: '.s-catalog-news__prev',
		nextEl: '.s-catalog-news__next'
	},
})

var main = new Swiper('.s-main__slider', {
	navigation: {
		prevEl: '.s-main__prev',
		nextEl: '.s-main__next'
	},
	pagination: {
		el: '.s-main__pagination',
		type: 'bullets',
		clickable: true
	}
})

$('.selectpicker').selectpicker({
  size: 4
})

$('.ui-lang__current').click(function() {
	$(this).toggleClass('ui-lang__current_open');
});

$('button.contact-nav__info.fa.fa-info').click(function () {
	$('.contact-nav__dropdown').toggleClass('contact-nav__dropdown_open')
})

$('.s-top__column.s-top__column_burger .button-header-bar').click(function() {
	$('.mobile-menu').toggleClass('mobile-menu_open')
});