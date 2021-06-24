import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	
	sliders('.feedback-slider-item', 'hor', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical',);
	modals();
	forms();
	mask('[data-phone]');
	showMoreStyles('.button-styles', '#styles .row');
	calc('#size', '#material', '#options', '.promocode', '.calc-price');
});