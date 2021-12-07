export const getToppings = (toppings) => {
	if (toppings) {
		return toppings.map(elem => {
			return {name: elem, check: false}
		})
	} else {
		return null
	}
}

export const getCheckedToppings = (array) => {
	if (array) {
		return array.filter(elem => elem.check === true)
	} else {
		return [];
	}
}