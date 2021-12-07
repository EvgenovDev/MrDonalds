const countPrice = (price, count) => {
	return price * count
}

const countAllPrice = (array) => {
	return array.reduce((result, elem) =>
	countPrice(elem.price, elem.count) + result , 0)
} 

export {countPrice, countAllPrice};