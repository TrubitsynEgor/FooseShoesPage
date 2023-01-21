

function testWebP(callback) {
	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();



$(document).ready(function () {
	$('#go-to-1').click(function (event) {
		$('.slider__nav-item_1').addClass('active');
		$('.slider__nav-item_2,.slider__nav-item_3,.slider__nav-item_4,.slider__nav-item_5').removeClass('active');
	})
	$('#go-to-2').click(function (event) {
		$('.slider__nav-item_2').addClass('active');
		$('.slider__nav-item_1,.slider__nav-item_3,.slider__nav-item_4,.slider__nav-item_5').removeClass('active');
	})
	$('#go-to-3').click(function (event) {
		$('.slider__nav-item_3').addClass('active');
		$('.slider__nav-item_2,.slider__nav-item_1,.slider__nav-item_4,.slider__nav-item_5').removeClass('active');
	})
	$('#go-to-4').click(function (event) {
		$('.slider__nav-item_4').addClass('active');
		$('.slider__nav-item_2,.slider__nav-item_1,.slider__nav-item_3,.slider__nav-item_5').removeClass('active');
	})
	$('#go-to-5').click(function (event) {
		$('.slider__nav-item_5').addClass('active');
		$('.slider__nav-item_2,.slider__nav-item_1,.slider__nav-item_3,.slider__nav-item_4').removeClass('active');
	})
	// $('.header__search-btn').click(function (event) {
	// 	$('.header__search-btn, .header__search-form').toggleClass('active');
	// })
});


const s = document.querySelectorAll('.counter');


function func1() {
	let val = Number(this.innerHTML);
	val += 1;
	this.innerHTML = val;
}
s.forEach(ss => {
	ss.addEventListener('mouseover', func1);
})
// s.addEventListener('mouseover', func1);





const mySwiper = new Swiper('.swiper', {
	loop: true,
	allowTouchMove: false,
	breakpoints: {
		// when window width is >= 320px
		320: {
			allowTouchMove: true,
		},
		// when window width is >= 480px
		480: {
			allowTouchMove: true,
		},
		// when window width is >= 640px
		641: {
			slidesPerView: 1,
			allowTouchMove: true,
		},
		961: {
			allowTouchMove: false,
		}
	},
})

const sliderBtnOne = document.getElementById('go-to-1').addEventListener('click', () => {
	mySwiper.slideTo(1);
});

const sliderBtnTwo = document.getElementById('go-to-2').addEventListener('click', () => {
	mySwiper.slideTo(2);
});
const sliderBtnThree = document.getElementById('go-to-3').addEventListener('click', () => {
	mySwiper.slideTo(3);
});
const sliderBtnFour = document.getElementById('go-to-4').addEventListener('click', () => {
	mySwiper.slideTo(4);
});
const sliderBtnFive = document.getElementById('go-to-5').addEventListener('click', () => {
	mySwiper.slideTo(5);
});



const searchBtn = document.querySelector('.header__search-btn')
const searchInput = document.querySelector('.header__search-form')
const mainLogo = document.querySelector('.header__logo')
const formLogin = document.querySelector('.header__log-form')

searchBtn.addEventListener('click', (e) => {
	if (e.target.closest('.header__search-btn')) {
		searchBtn.classList.toggle('active');
		searchInput.classList.toggle('active');
		mainLogo.classList.toggle('active');
		formLogin.classList.toggle('active');
	}
});


const burgerBtn = document.querySelector('.header__burger')
const menuList = document.querySelector('.menu__list')

burgerBtn.addEventListener('click', (e) => {
	if (e.target.closest('.header__burger')) {
		burgerBtn.classList.toggle('active');
		menuList.classList.toggle('active');
		document.body.classList.toggle('lock');
	}
});