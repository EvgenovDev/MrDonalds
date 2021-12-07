export const toLocaleStringFunc = (elem) => {
	 return elem.toLocaleString("ru-RU", {style: "currency", currency: "RUB"})
}