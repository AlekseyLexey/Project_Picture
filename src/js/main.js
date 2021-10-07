import modals from "./modules/modals";
import slider from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
	"use strict";

	modals();
	slider('.feedback-slider-item', ' ', '.main-prev-btn', '.main-next-btn');
});