export const getToppings = (toppings) => {
	const newArray = toppings.map(elem => {
		return {name: elem, check: false}
	})

	return newArray;
}

export const getCheckedToppings = (array) => {
	return array.filter(elem => elem.check === true)
}