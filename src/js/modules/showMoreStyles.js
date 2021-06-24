import {getResource} from '../services/requests';

const showMoreStyles = (triger, wrapper) => {
	const card = document.querySelectorAll(wrapper),
		  btn = document.querySelector(triger);

	
	btn.addEventListener('click', () => {
		getResource('http://localhost:3000/styles')
			.then(res => createCards(res))
			.catch(error => `error`);

			btn.remove();
	});

	function createCards(response) {
		response.forEach(({src, title, link}) => {
			let card = document.createElement('div');

			card.classList.add('animated','fadeInDown', 'col-sm-3' ,'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

			card.innerHTML = `
				<div class=styles-block>
					<img src=${src} alt=${title}>
					<h4>${title}</h4>
					<a href="${link}">Подробнее</a>
				</div>
			`;

			document.querySelector(wrapper).appendChild(card);
		});
	}
}

export default showMoreStyles;