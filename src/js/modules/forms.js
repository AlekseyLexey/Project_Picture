const forms = () => {
	const forms									= document.querySelectorAll('form'),
			upload								= document.querySelectorAll('[name="upload"]');

	const message	= {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...',
		ok: 'assets/img/ok.png',
		load: 'assets/img/spinner.gif',
		fail: 'assets/img/fail.png'
	},
			path		= {
				designer: 'assets/server.php',
				question: 'assets/question.php'
	};

	forms.forEach(item => {
		postData(item);
	});

	upload.forEach(item => {
		item.addEventListener('input', () => {
			console.log(item.files[0]);
			let dotts,
				arr = item.files[0].name.split('.');
				arr[0].length > 6 ? dotts = '...' : dotts = '.';
			const name = arr[0].substring(0, 6) + dotts + arr[1];
			item.previousElementSibling.textContent = name;
		});
	});

	const processingPostData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});

		return await res.text();
	};

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage					= document.createElement('div');
			statusMessage.classList.add('status', 'animated', 'fadeInUp');
			form.parentNode.appendChild(statusMessage);

			form.classList.add('animated', 'fadeOutUp');
			setTimeout(() => {
				form.style.display = 'none';
			}, 500);

			let statusImg						= document.createElement('img');
			statusImg.setAttribute('src', message.load);
			statusMessage.appendChild(statusImg);

			let textMessage					= document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			let api;
			form.closest('.popup-design') || form.classList.contains('calc-form') ? api = path.designer : api = path.question;
			console.log(api);

			const formData						= new FormData(form);

			processingPostData(api, formData)
				.then(data => {
					console.log(data);
					statusImg.setAttribute('src', message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail);
					textMessage.textContent = message.failure;
				})
				.finally(() => {
				form.reset();
				upload.forEach(item => item.previousElementSibling.textContent = 'Файл не выбран');
				setTimeout(() => {
					statusMessage.remove();
					form.style.display = 'block';
					form.classList.remove('fadeOutUp');
					form.classList.add('fadeInUp');
				}, 5000);
			});
		});
	}
};

export default forms;