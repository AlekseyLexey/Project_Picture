const slider = (sliderWrapper, dir, prevBtn, nextBtn) => {

	const allSlides = document.querySelectorAll(sliderWrapper);

	let slideIndex = 1,
		paused		= false;

	showSliders(slideIndex);
	autoSwitching();

	function showSliders(n) {
		if (n > allSlides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = allSlides.length;
		}

		allSlides.forEach(item => {
			item.classList.add('animated');
			item.style.display = 'none';
		});

		allSlides[slideIndex - 1].style.display = 'block';
	}

	function plusSlide(n) {
		showSliders(slideIndex += n);
	}

	try {
		const prevArrow = document.querySelector(prevBtn),
				nextArrow = document.querySelector(nextBtn);

		prevArrow.addEventListener('click', () => {
			plusSlide(-1);
			allSlides[slideIndex - 1].classList.remove('slideInLeft');
			allSlides[slideIndex - 1].classList.add('slideInRight');
		});

		nextArrow.addEventListener('click', () => {
			plusSlide(1);
			allSlides[slideIndex - 1].classList.remove('slideInRight');
			allSlides[slideIndex - 1].classList.add('slideInLeft');
		});

	} catch (error) {}
	
	function autoSwitching() {
		if (dir === 'vertical') {
			paused = setInterval(() => {
	
				plusSlide(1);
				allSlides[slideIndex - 1].classList.add('slideInDown');
			}, 3000);
		} else {
			paused = setInterval(() => {
	
				plusSlide(1);
				allSlides[slideIndex - 1].classList.remove('slideInRight');
				allSlides[slideIndex - 1].classList.add('slideInLeft');
			}, 3000);
		}
	}

	allSlides[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused);
	});

	allSlides[0].parentNode.addEventListener('mouseleave', () => {
		autoSwitching();
	});
};

export default slider;