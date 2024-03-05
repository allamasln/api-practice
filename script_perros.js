const buttonElDOM = document.querySelector('button')
const containerElDOM = document.querySelector('main')

buttonElDOM.addEventListener('click', () => {
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
			console.log(data)

			const { message: breeds } = data
			const output = []

			for (const breed in breeds) {
				output.push(breed)
			}

			console.log(output)
		})
}

getAllBreeds()
