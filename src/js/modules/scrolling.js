const scrolling = (upSelector) => {

	const upElem				= document.querySelector(upSelector);

	window.addEventListener('scroll', () => {
		upElem.classList.add('animated');
		if (document.documentElement.scrollTop > 1200) {
			upElem.classList.remove('fadeOut');
			upElem.classList.add('fadeIn');
		} else {
			upElem.classList.remove('fadeIn');
			upElem.classList.add('fadeOut');
		}
	});

		const element			= document.documentElement,
				body				= document.body;

		const calcScroll = () => {
			upElem.addEventListener('click', function(event) {

				let scrollTop = Math.round(body.scrollTop || element.scrollTop);
				// console.log(this.hash);
				// if (this.hash !== '') {
					event.preventDefault();
					let hashElement = document.querySelector(this.hash),
						hashElementTop = 0;

						console.log(hashElement.offsetTop);
					while (hashElement.offsetParent) {
						hashElementTop += hashElement.offsetTop;
						hashElement = hashElement.offsetParent;
						console.log(hashElement);
					}

					hashElementTop = Math.round(hashElementTop);
					// smoothScroll(scrollTop, hashElementTop, this.hash);
				// }
			});
		};
		calcScroll();
};

export default scrolling;