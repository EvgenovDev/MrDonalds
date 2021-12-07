const countPrice = (price, count, countToppings, priceToppings) => {
	if (!countToppings && priceToppings) {
		return price * count
	} else {
		return (countToppings * priceToppings) + (price * count)
	}
}

const countAllPrice = (array) => {
	return array.reduce((result, elem) =>
	countPrice(elem.price, elem.count) + result , 0)
} 

export {countPrice, countAllPrice};