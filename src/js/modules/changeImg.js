const changeImg = () => {

	const blocks					= document.querySelectorAll('.sizes-block'),
			imgs						= document.querySelectorAll('.sizes-block img');

	blocks.forEach(item => {
		item.addEventListener('mouseenter', (e) => {

			const target = e.target;
			console.log(target);
	
			if(target && target.classList.contains('sizes-block')) {
	
				blocks.forEach((item, i) => {
					if (target === item) {
	
						imgs[i].setAttribute('src', `assets/img/sizes-${i+1}-1.png`);
					}
				});
			}
		});
	});

	blocks.forEach(item => {
		item.addEventListener('mouseleave', () => {

			imgs.forEach((item, i) => {
				item.setAttribute('src', `assets/img/sizes-${i+1}.png`);
			});
		});
	});
};

export default changeImg;