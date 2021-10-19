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

	function btnLisener(btn, mark = '') {

		btn.addEventListener('click', () => {
			filterMark(mark);
		});
	}

	function filterMark(markType) {

		markAll.forEach(item => {
			item.style.display = 'none';
			item.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		if (markType) {
			
			markType.forEach(element => {
				wrapper.style.cssText = `
					display: flex;
					justify-content:center;
					align-items: center;
				`;
				element.style.display = 'block';
				element.classList.add('animated', 'fadeIn');
			});

		} else {

			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');

		}
	}

	btnLisener(btnAll, markAll);

	btnLisener(btnLovers, markLovers);

	btnLisener(btnChef, markChefs);

	btnLisener(btnGirl, markGirls);

	btnLisener(btnGuy, markGuys);

	btnLisener(btnGrandmother);

	btnLisener(btnGranddad);

	menu.addEventListener('click', (e) => {

		const target = e.target;

		if (target && target.tagName =="LI") {
			items.forEach(item => item.classList.remove('active'));
			target.classList.add('active');
		}
	});
};

export default tabs;