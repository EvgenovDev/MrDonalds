import React from "react";

export const useChoices = () => {
	const [choices, setChoices] = React.useState(null)

	const checkChoices = (e) => {
		setChoices(e.target.value);
	}

	return {choices, checkChoices}
}