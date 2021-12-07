import React from "react";

export const useCount = () => {
	const [count, setCount] = React.useState(1);
	const changeCount = e => {
		if (e.target.value === "") {
			setCount(1)
		} else {
			setCount(parseInt(e.target.value))
		}
	};
	return {count, setCount, changeCount};
}