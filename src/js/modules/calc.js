import {getResourseData} from '../services/requests';

const calc = (sizeId, materialId, optionsId, selectorPromocode, selectorPrice, allPrice, sizeData, materialData, optionsData) => {

	// ? CALC Version 1.0 (value)

	// const sizeBlock						= document.querySelector(sizeId),
	// 		materialBlock					= document.querySelector(materialId),
	// 		optionsBlock					= document.querySelector(optionsId),
	// 		promocodeBlock					= document.querySelector(selectorPromocode),
	// 		priceBlock						= document.querySelector(selectorPrice);

	// let sum = 0;

	// const endAmount = () => {
	// 	allPrice.sum = sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

	// 	if (sizeBlock.value == '' || materialBlock.value == '') {
	// 		priceBlock.textContent = 'Пожалуйста выберите размер и материал картины';
	// 	} else if (promocodeBlock.value === 'IWANTPOPART'){
	// 		priceBlock.textContent = Math.round(sum * 0.7);
	// 	} else {
	// 		priceBlock.textContent = sum;
	// 	}
	// 	console.log(allPrice);
	// };

	// sizeBlock.addEventListener('change', endAmount);
	// materialBlock.addEventListener('change', endAmount);
	// optionsBlock.addEventListener('change', endAmount);
	// promocodeBlock.addEventListener('input', endAmount);

	// ? CALC Version 2.0 (db.json)

	const sizeBlock						= document.querySelector(sizeId),
			materialBlock					= document.querySelector(materialId),
			optionsBlock					= document.querySelector(optionsId),
			promocodeBlock					= document.querySelector(selectorPromocode),
			priceBlock						= document.querySelector(selectorPrice),
			sizeAll							= document.querySelectorAll(sizeData),
			materialAll						= document.querySelectorAll(materialData),
			optionsAll						= document.querySelectorAll(optionsData);


	getResourseData('http://localhost:3000/calc')
		.then(res => {
			
			for (let i = 0; i < sizeAll.length ; i++) {
				sizeAll[i].value = res[0].size[i];
			}

			for (let i = 0; i < materialAll.length ; i++) {
				materialAll[i].value = res[0].material[i];
			}

			for (let i = 0; i < optionsAll.length ; i++) {
				optionsAll[i].value = res[0].options[i];
			}
		});

	let sum = 0;

	const endAmount = () => {

		allPrice.sum = sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

		if (sizeBlock.value == '' || materialBlock.value == '') {
			priceBlock.textContent = 'Пожалуйста выберите размер и материал картины';
		} else if (promocodeBlock.value === 'IWANTPOPART'){
			priceBlock.textContent = Math.round(sum * 0.7);
		} else {
			priceBlock.textContent = sum;
			allPrice.sum = sum;
		}

	};

	sizeBlock.addEventListener('change', endAmount);
	materialBlock.addEventListener('change', endAmount);
	optionsBlock.addEventListener('change', endAmount);
	promocodeBlock.addEventListener('input', endAmount);
};

export default calc;