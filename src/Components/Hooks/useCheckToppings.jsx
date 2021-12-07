import React from "react"
import { getToppings } from "../Functions/getToppings";

export const useCheckToppings = (item) => {
	const [toppings, setToppings] = React.useState(getToppings(item.toppings));

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