import React from "react";

export const useCount = (openModal) => {

	const ready = (openModal) => {
		return openModal.count ? openModal.count : 1
	}

	const [count, setCount] = React.useState(ready(openModal));
	const changeCount = e => {
		if (e.target.value === "") {
			setCount(1)
		} else {
			setCount(parseInt(e.target.value))
		}
	};
	return {count, setCount, changeCount};
}