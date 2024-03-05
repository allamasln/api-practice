const randomButtonElDOM = document.getElementById('random')
const listButtonElDOM = document.getElementById('list')
const containerElDOM = document.querySelector('main')
const formElDOM = document.querySelector('form')

listButtonElDOM.addEventListener('click', () => {
	console.log('CLICK')

	getImagesByBreed()
})

randomButtonElDOM.addEventListener('click', () => {
	console.log('CLICK')

	// 1. Obtener de la api una cerveza aleatoria

	fetch('https://dog.ceo/api/breeds/image/random')
		.then((res) => res.json())
		.then((data) => {
			containerElDOM.innerHTML = ''

			const img = document.createElement('img')
			img.src = data.message

			img.height = '500'

			containerElDOM.appendChild(img)
		})
})

function getAllBreeds() {
	fetch('https://dog.ceo/api/breeds/list/all')
		.then((res) => res.json())
		.then((data) => {
			const breeds = []

			for (const breed in data.message) {
				breeds.push(breed)
			}

			const select = document.createElement('select')

			breeds.forEach((breed) => {
				const option = document.createElement('option')
				option.textContent = breed
				option.value = breed

				select.appendChild(option)
			})

			const button = document.createElement('button')
			button.textContent = 'Obtiene fotos de la raza seleccionada'

			button.addEventListener('click', (event) => {
				event.preventDefault()

				// Pinte la lista de perros de la raza seleccionada
				console.log(select.value)
			})

			formElDOM.append(select, button)
		})
}

getAllBreeds()

function getImagesByBreed(breed) {
	fetch('https://dog.ceo/api/breed/dalmatian/images')
		.then((res) => res.json())
		.then(({ message: dogs }) => {
			containerElDOM.innerHTML = ''

			const list = document.createElement('ul')

			dogs.forEach((dogImage) => {
				const item = document.createElement('li')
				const img = document.createElement('img')
				img.src = dogImage

				item.appendChild(img)
				list.appendChild(item)
			})

			containerElDOM.appendChild(list)
		})
}
