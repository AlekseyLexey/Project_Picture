import checkInputsText from "./modules/checkInputsText";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import showMoreStyles from "./modules/showMoreStyles";
import slider from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
	"use strict";

	modals();
	slider('.main-slider-item', 'vertical');
	slider('.feedback-slider-item', ' ', '.main-prev-btn', '.main-next-btn');
	forms();
	mask('[name="phone"]');
	checkInputsText('[name="name"]');
	checkInputsText('[name="message"]');
	showMoreStyles('#styles .row', '.button-transparent');
});