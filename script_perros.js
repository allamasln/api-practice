const randomButtonElDOM = document.getElementById('random')
const listButtonElDOM = document.getElementById('list')
const containerElDOM = document.querySelector('main')
const formElDOM = document.querySelector('form')

const baseURL = 'https://dog.ceo/api'

listButtonElDOM.addEventListener('click', () => {
	getImagesByBreed('dalmatian')
})

randomButtonElDOM.addEventListener('click', () => {
	getRandomImageByBreed()
})

getAllBreeds()

function getAllBreeds() {
	const endpoint = baseURL + '/breeds/list/all'
	fetch(endpoint)
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

			const checkbox = document.createElement('input')
			checkbox.type = 'checkbox'
			const label = document.createElement('label')
			label.textContent = 'OBTENER SOLO UNA ALEATORIA DE LA RAZA'

			const button = document.createElement('button')
			button.textContent = 'Obtiene fotos de la raza seleccionada'

			button.addEventListener('click', (event) => {
				event.preventDefault()

				const breed = select.value
				const isChecked = checkbox.checked

				if (isChecked) {
					getRandomImageByBreed(breed)
				} else {
					getImagesByBreed(breed)
				}
			})

			formElDOM.append(select, checkbox, label, button)
		})
}

function getImagesByBreed(breed) {
	const endpoint = `${baseURL}/breed/${breed}/images`

	fetch(endpoint)
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

function getRandomImageByBreed(breed) {
	let endpoint = baseURL + '/'
	endpoint += breed ? `breed/${breed}/images` : `breeds/image`
	endpoint += '/random'

	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			containerElDOM.innerHTML = ''

			const img = document.createElement('img')
			img.src = data.message

			img.height = '500'

			containerElDOM.appendChild(img)
		})
}
