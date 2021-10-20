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

	// ? Version 2.0 pure JS + CSS:
	const triggers					= document.querySelectorAll(triggersSelector);

	triggers.forEach(item => {
		item.addEventListener('click')
	});
};

export default accordion;