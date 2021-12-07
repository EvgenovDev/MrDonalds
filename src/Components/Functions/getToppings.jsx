export const getToppings = (toppings) => {
	const newArray = toppings.map(elem => {
		return {name: elem, check: false}
	})

	return newArray;
}