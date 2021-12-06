import React from "react";

export const useAddOrder = () => {
	const [order, setOrder] = React.useState([])
	return {order, setOrder};
}