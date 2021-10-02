const modals = () => {

	const scroll				= window.innerWidth - document.body.clientWidth;
	
	function bindModal(triggerSelector, modalSelector, closeSelector, dataWindow = true) {
		const trigger			= document.querySelectorAll(triggerSelector),
				modals			= document.querySelector(modalSelector),
				close				= document.querySelector(closeSelector);
				

		function openModal(modal) {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scroll}px`;
		}
	
		function closeModal() {
			modals.style.display = 'none';
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
					checkData(() => openModal(modals), 'none');
				}
			});
		});

		close.addEventListener('click', () => {
			checkData(closeModal, '');
		});

		modals.addEventListener('click', (e) => {
			if (e.target === modals) {
				checkData(closeModal, '');
			}
		});

		function modalOpenByScrollToBottom() {
			if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
				openModal(document.querySelector('.popup-gift'));
				window.removeEventListener('scroll', modalOpenByScrollToBottom);
			}
		}
	
		window.addEventListener('scroll', modalOpenByScrollToBottom);
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
	// showModalByTime('.popup-consultation', 60000);
};

export default modals;