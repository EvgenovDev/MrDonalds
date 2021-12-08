import React from "react"
import { getToppings } from "../Functions/getToppings";

export const useCheckToppings = (item) => {
	const ready = item.topping ? item.topping : getToppings(item.toppings)
	const [toppings, setToppings] = React.useState(ready);

	const checkToppings = (index) => {
		setToppings(toppings.map((elem,i) => {
			if (index === i) {
				elem.check = !elem.check
			}
			return elem;
		}))
	}

	return {toppings, checkToppings}
}