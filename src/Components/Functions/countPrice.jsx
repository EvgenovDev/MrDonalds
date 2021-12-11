const countPrice = (price, count, countToppings, priceToppings) => {
	if (countToppings !== 0 && countToppings) {
		return (countToppings * priceToppings) + (price * count)
	} else {
		return price * count
	}
}

const countAllPrice = (array) => {
	return array.reduce((result, elem) => 
	countPrice(elem.price, elem.count, elem.topping.length, elem.priceTopping) + result , 0)
} 

export {countPrice, countAllPrice};