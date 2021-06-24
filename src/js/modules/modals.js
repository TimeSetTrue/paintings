const modal = () => {

	let btnScroll = false;

	function bindModal(callEngineerBtn, modalEngineer, closeEngineer, destroy = false) {
		const triger = document.querySelectorAll(callEngineerBtn),
			  modal = document.querySelector(modalEngineer),
			  close = document.querySelector(closeEngineer),
			  windows = document.querySelectorAll('[data-modal]'),
			  scroll = calcScroll();

		triger.forEach(item => {
			item.addEventListener('click', (e) => {
				if(e.target) {
					e.preventDefault();
				}

				btnScroll = true;

				if(destroy) {
					item.style.display = 'none';
				}

				windows.forEach(item => {
					item.style.display = 'none';
					item.classList.add('animated', 'fadeIn');
				});

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;

			});
		});

		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});

			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		});

		modal.addEventListener('click', (e) => {
			if(e.target === modal && closeClickOverlay) {
				windows.forEach(item => {
					item.style.display = 'none';
				});

				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = `0px`;
			}
		});
	}

	function openByScroll(selector) {
		window.addEventListener('scroll', () => {
			if(!btnScroll && (document.documentElement.clientHeight + window.pageYOffset >=
				document.documentElement.scrollHeight)) {
					document.querySelector(selector).click();
				}
		});
	}

	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
	openByScroll('.fixed-gift');
}


export default modal;