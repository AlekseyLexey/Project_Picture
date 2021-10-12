import { getResourseData } from "../services/requests";

const showMoreStyles = (blocksSelector, trigger) => {
	
	// ? Version 1.0 (DOM only)

	// const hiddenBlocks			= document.querySelectorAll(selector),
	// 		button					= document.querySelector(trigger);

	// button.addEventListener('click', () => {
	// 	hiddenBlocks.forEach(item => {
	// 		item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
	// 		item.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
	// 	});
	// 	button.remove();
	// });

	// ? Version 2.0 (loading from server)

	const mainBlock			= document.querySelector(blocksSelector),
			button				= document.querySelector(trigger);

	button.addEventListener('click', function() {
		getResourseData('http://localhost:3000/styles')
			.then(res => createCards(res))
			.catch(error => console.log(error));

		this.remove();
	});

	function createCards(element) {
		element.forEach(({src, title, link}) => {

			let blockStyle = document.createElement('div');

			blockStyle.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
			blockStyle.innerHTML = `
				<div class="styles-block">
					<img src=${src} alt>
					<h4>${title}</h4>
					<a href="${link}">Подробнее</a>
				</div>
			`;

			mainBlock.appendChild(blockStyle);
		});
	}
};

export default showMoreStyles;