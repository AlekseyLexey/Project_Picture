const tabs = () => {

	const menu						= document.querySelector('.portfolio-menu'),
			items						= menu.querySelectorAll('li'),
			btnAll					= menu.querySelector('.all'),
			btnLovers				= menu.querySelector('.lovers'),
			btnChef					= menu.querySelector('.chef'),
			btnGirl					= menu.querySelector('.girl'),
			btnGuy					= menu.querySelector('.guy'),
			btnGrandmother			= menu.querySelector('.grandmother'),
			btnGranddad				= menu.querySelector('.granddad'),
			wrapper					= document.querySelector('.portfolio-wrapper'),
			markAll					= wrapper.querySelectorAll('.all'),
			markLovers				= wrapper.querySelectorAll('.lovers'),
			markChefs				= wrapper.querySelectorAll('.chef'),
			markGirls				= wrapper.querySelectorAll('.girl'),
			markGuys					= wrapper.querySelectorAll('.guy'),
			no							= document.querySelector('.portfolio-no');

	function filterMark(markType) {

		markAll.forEach(item => {
			item.style.display = 'none';
			item.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		if (markType) {

			markType.forEach(element => {
				element.style.display = 'block';
				element.classList.add('animated', 'fadeIn');
			});

		} else {

			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');

		}
	}

	btnAll.addEventListener('click', () => {
		filterMark(markAll);
	});

	btnLovers.addEventListener('click', () => {
		filterMark(markLovers);
	});

	btnChef.addEventListener('click', () => {
		filterMark(markChefs);
	});

	btnGirl.addEventListener('click', () => {
		filterMark(markGirls);
	});

	btnGuy.addEventListener('click', () => {
		filterMark(markGuys);
	});

	btnGrandmother.addEventListener('click', () => {
		filterMark();
	});

	btnGranddad.addEventListener('click', () => {
		filterMark();
	});

	menu.addEventListener('click', (e) => {

		const target = e.target;

		if (target && target.tagName =="LI") {
			items.forEach(item => item.classList.remove('active'));
			target.classList.add('active');
		}
	});
};

export default tabs;