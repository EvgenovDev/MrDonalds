export const getCountOrder = (array) => {
	return array.reduce((result,elem) => elem.count + result, 0)
}