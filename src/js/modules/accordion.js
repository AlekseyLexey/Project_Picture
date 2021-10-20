const accordion = (triggersSelector) => {
	/*
	? Version 1.0 with CSS:
	? (.often-questions .accordion-heading.active+.accordion-block)
	? (.often-questions p.active-style span)
	? (.often-questions .accordion-block)
	*/
	// const triggers					= document.querySelectorAll(triggersSelector);

	// triggers.forEach(item => {
	// 	item.addEventListener('click', function() {

	// 		if (!this.classList.contains('active')) {
	// 			this.nextElementSibling.classList.remove('animated', 'fadeOutUp');
	// 			this.nextElementSibling.classList.add('animated', 'fadeInDown');
	// 			this.classList.add('active', 'active-style');
	// 		} else {
	// 			this.nextElementSibling.classList.remove('animated', 'fadeInDown');
	// 			this.nextElementSibling.classList.add('animated', 'fadeOutUp');
	// 			this.classList.remove('active', 'active-style');
	// 		}
	// 	});
	// });

	/*
	? Version 2.0 JS + CSS:
	? (.often-questions .accordion-block)
	? (.often-questions .accordion-block.active-content)
	*/
	const triggers					= document.querySelectorAll(triggersSelector);

	triggers.forEach(item => {
		item.addEventListener('click', function() {
			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');

			if (this.classList.contains('active-style')) {
				//?																										80 - padding
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});
};

export default accordion;