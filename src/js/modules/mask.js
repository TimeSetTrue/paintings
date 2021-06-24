const mask = (selector) => {

	const phoneInputs = document.querySelectorAll(selector);
	
	let getInputNumberValue = function(input) {
		return input.value.replace(/\D/g, '');
	}


	let onPhoneInput = function(e) {
		let input = e.target,
			inputNumberValue = getInputNumberValue(input),
			formattedInputValue = '',
			selectionStart = input.selectionStart;

		if(!inputNumberValue) {
			return input.value = '';
		}

		if(input.value.length != selectionStart) {
			if(e.data && /\D/g.test(e.data)) {
				input.value = inputNumberValue;
			}
			return;
		}

		if(['7', '8', '9'].indexOf(inputNumberValue[0]) > -1) {
			if(inputNumberValue[0] == '9') {
				inputNumberValue = '7' + inputNumberValue;
			}
			let firstSymbol = (inputNumberValue[0] == '8') ? '8' : '+7';
			formattedInputValue = firstSymbol + ' ';

			if(inputNumberValue.length > 1) {
				formattedInputValue += '(' + inputNumberValue.substring(1, 4);
			}
			if(inputNumberValue.length >= 5) {
				formattedInputValue += ') ' + inputNumberValue.substring(4, 7);
			}
			if(inputNumberValue.length >= 8) {
				formattedInputValue += '-' + inputNumberValue.substring(7, 9);
			}
			if(inputNumberValue.length >= 10) {
				formattedInputValue += '-' + inputNumberValue.substring(9, 11);
			}
		} else {
			formattedInputValue = input.value = '+' + inputNumberValue.substring(0, 16);
		}
		input.value = formattedInputValue;
		
	}

	
	let onPhoneKeyDown = function(e) {
		let target = e.target;
		if(e.keyCode == 8 && getInputNumberValue(target).length == 1) {
			target.value = '';
		}
	}

	let onPhonePaste = function(e) {
		let pasted = e.clipboardData || window.clipboardData,
			input = e.target,
			inputNumberValue = getInputNumberValue(input);
		
		if(pasted) {
			let pastedText = pasted.getData('Text');
			if(/\D/g.test(pastedText)) {
				input.value = inputNumberValue;
			}
		}
	}
	
	phoneInputs.forEach(item => {
		item.addEventListener('input', onPhoneInput);
		item.addEventListener('keydown', onPhoneKeyDown);
		item.addEventListener('paste', onPhonePaste)
	});

}

export default mask;