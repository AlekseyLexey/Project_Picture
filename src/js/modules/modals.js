const modals = () => {

	let btnNotPressed		= true;
	const scroll				= window.innerWidth - document.body.clientWidth;

	function bindModal(triggerSelector, modalSelector, closeSelector, dataWindow = true) {
		const trigger			= document.querySelectorAll(triggerSelector),
				modal			= document.querySelector(modalSelector),
				close				= document.querySelector(closeSelector),
				windows			= document.querySelectorAll('[data-modal]');

		function openModal() {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scroll}px`;
		}

		function closeModal() {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		}

		function checkData(action, display) {
			if (!dataWindow) {
				action();
				trigger.forEach(item => item.style.display = `${display}`);
			} else {
				action();
			}
		}

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
					if (e.target) {
					e.preventDefault();
					windows.forEach(item => {
						item.style.display = 'none';
						item.classList.add('animated','fadeIn');

					});
					btnNotPressed = false;
					checkData(openModal, 'none');
				}
			});
		});

		close.addEventListener('click', () => {
			checkData(closeModal, '');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				checkData(closeModal, '');
			}
		});
	}

	function modalOpenByScrollToBottom(selector) {
		window.addEventListener('scroll', () => {

			let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

			if ((window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) &&
			btnNotPressed) {
				document.querySelector(selector).click();
				document.querySelector(selector).remove();
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			let display;

			document.querySelectorAll('[data-modal]').forEach(item => {
				if (getComputedStyle(item).display !== 'none') {
					display = 'Stop';
				}
			});

			if (!display) {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;

			}

		}, time);
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', false);
	modalOpenByScrollToBottom('.fixed-gift');
	// showModalByTime('.popup-consultation', 60000);
};

export default modals;