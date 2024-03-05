const randomButtonElDOM = document.getElementById('random')
const listButtonElDOM = document.getElementById('list')
const containerElDOM = document.querySelector('main')

listButtonElDOM.addEventListener('click', () => {
	console.log('CLICK')

	// 1. Obtener de la api una cerveza aleatoria

	fetch('https://api.punkapi.com/v2/beers')
		.then((res) => res.json())
		.then((data) => {
			containerElDOM.innerHTML = ''

			const list = document.createElement('ul')

			const beers = data.map((beer) => beer.image_url)

			beers.forEach((beerImage) => {
				const item = document.createElement('li')
				const img = document.createElement('img')
				img.src = beerImage

				item.appendChild(img)
				list.appendChild(item)
			})

			containerElDOM.appendChild(list)
		})
})

randomButtonElDOM.addEventListener('click', () => {
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
