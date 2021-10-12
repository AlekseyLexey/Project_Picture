const showMoreStyles = (selector, trigger) => {

	const hiddenBlocks			= document.querySelectorAll(selector),
			button					= document.querySelector(trigger);

	button.addEventListener('click', () => {
		hiddenBlocks.forEach(item => {
			item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			item.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		});
		button.remove();
	});
};

export default showMoreStyles;