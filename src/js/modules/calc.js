const calc = (sizeId, materialId, optionsId, selectorPromocode, selectorPrice, allPrice) => {

	const sizeBlock						= document.querySelector(sizeId),
			materialBlock					= document.querySelector(materialId),
			optionsBlock					= document.querySelector(optionsId),
			promocodeBlock					= document.querySelector(selectorPromocode),
			priceBlock						= document.querySelector(selectorPrice);

	let sum = 0;

	const endAmount = () => {
		allPrice.sum = sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

		if (sizeBlock.value == '' || materialBlock.value == '') {
			priceBlock.textContent = 'Пожалуйста выберите размер и материал картины';
		} else if (promocodeBlock.value === 'IWANTPOPART'){
			priceBlock.textContent = Math.round(sum * 0.7);
		} else {
			priceBlock.textContent = sum;
		}
		console.log(allPrice);
	};

	sizeBlock.addEventListener('change', endAmount);
	materialBlock.addEventListener('change', endAmount);
	optionsBlock.addEventListener('change', endAmount);
	promocodeBlock.addEventListener('input', endAmount);
};

export default calc;