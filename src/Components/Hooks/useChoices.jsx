import React from "react";

export const useChoices = (openModal) => {
	const [choices, setChoices] = React.useState(openModal.choices)

	const checkChoices = (e) => {
		setChoices(e.target.value);
	}

	return {choices, checkChoices}
}