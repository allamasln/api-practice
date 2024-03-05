// FILOSOFIA INCREMENTAL

// Declara una función que consulta a la api una cerveza random imprima por consola un array de strings con todos los incredientes
// ejemplo

function getAllIngredients() {
	fetch('https://api.punkapi.com/v2/beers/random')
		.then((res) => res.json())
		.then((data) => {
			const { ingredients } = data[0]
			const output = []

			for (const ingredient in ingredients) {
				output.push(ingredient)
			}

			console.log(output)
		})
}

getAllIngredients()
