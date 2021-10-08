import forms from "./modules/forms";
import modals from "./modules/modals";
import slider from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
	"use strict";

	modals();
	slider('.main-slider-item', 'vertical');
	slider('.feedback-slider-item', ' ', '.main-prev-btn', '.main-next-btn');
	forms();
});