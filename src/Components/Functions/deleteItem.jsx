export const deleteItem = (orders , index) => {
	return orders.filter((elem, i) => i !== index)
}