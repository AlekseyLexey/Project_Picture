import calc from "./modules/calc";
import checkInputsText from "./modules/checkInputsText";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import showMoreStyles from "./modules/showMoreStyles";
import slider from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
	"use strict";

	let priceWindow = {};

	modals();
	slider('.main-slider-item', 'vertical');
	slider('.feedback-slider-item', ' ', '.main-prev-btn', '.main-next-btn');
	forms(priceWindow);
	mask('[name="phone"]');
	checkInputsText('[name="name"]');
	checkInputsText('[name="message"]');
	showMoreStyles('#styles .row', '.button-transparent');
	// calc('#size', '#material', '#options', '.promocode', '.calc-price', priceWindow); For calc version 1.0!
	calc('#size', '#material', '#options', '.promocode', '.calc-price', priceWindow, '[data-size]', '[data-material]', '[data-options]');
});