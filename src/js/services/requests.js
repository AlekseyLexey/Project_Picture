const processingPostData = async (url, data) => {
	let res = await fetch(url, {
		method: "POST",
		body: data
	});

	return await res.text();
};

const getResourseData = async (url) => {
	let res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, reason ${res.status}`);
	}

	return await res.json();
};

export {processingPostData, getResourseData};