import React from "react";

export const useIndex = () => {
	const [indexOrder, setIndexOrder] = React.useState();
	return {indexOrder, setIndexOrder}
}
