const changeImg = (imgSelector) => {

	// ? Version 1.0
	// const blocks					= document.querySelectorAll('.sizes-block'),
	// 		imgs						= document.querySelectorAll('.sizes-block img');

	// blocks.forEach(item => {
	// 	item.addEventListener('mouseenter', (e) => {

	// 		const target = e.target;
	// 		console.log(target);
	
	// 		if(target && target.classList.contains('sizes-block')) {
	
	// 			blocks.forEach((item, i) => {
	// 				if (target === item) {
	
	// 					imgs[i].setAttribute('src', `assets/img/sizes-${i+1}-1.png`);
	// 				}
	// 			});
	// 		}
	// 	});
	// });

	// blocks.forEach(item => {
	// 	item.addEventListener('mouseleave', () => {

	// 		imgs.forEach((item, i) => {
	// 			item.setAttribute('src', `assets/img/sizes-${i+1}.png`);
	// 		});
	// 	});
	// });

	// ? Version 2.0

	const blocks					= document.querySelectorAll(imgSelector);

	function showImg(block) {

		block.addEventListener('mouseover', () => {

			const img = block.querySelector('img');

			img.src = img.src.slice(0, -4) + '-1.png';
			block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
				item.style.display = 'none';
			});
		});
	}

	
	function hideImg(block) {

		block.addEventListener('mouseout', () => {

			const img = block.querySelector('img');

			img.src = img.src.slice(0, -6) + '.png';
			block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
				item.style.display = 'block';
			});
		});
	}

	blocks.forEach(item => {
		showImg(item);
		hideImg(item);
	});
};

export default changeImg;