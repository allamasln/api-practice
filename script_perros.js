// FILOSOFIA INCREMENTAL

// Declara una función getAllBreeds que consulta a la api de perros e imprima un array de strings con todas las razas de perro.

//dog.ceo/dog-api/

// ejemplo

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
