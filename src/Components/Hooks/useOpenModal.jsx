import React from "react";

export const useOpenModal = () => {
	const [openModal, setOpenModal] = React.useState(null);
	return {openModal, setOpenModal};
}