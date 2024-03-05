const buttonElDOM = document.querySelector('button')
const containerElDOM = document.querySelector('main')

buttonElDOM.addEventListener('click', () => {
	console.log('CLICK')

	// 1. Obtener de la api una cerveza aleatoria

	fetch('https://api.punkapi.com/v2/beers/random')
		.then((res) => res.json())
		.then(([beer]) => {
			if (!beer.image_url) return

			containerElDOM.innerHTML = ''

			const img = document.createElement('img')
			img.src = beer.image_url

			img.height = '500'

			containerElDOM.appendChild(img)
		})
})
