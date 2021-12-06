import React from "react";
import styled from "styled-components";
import { ModalButton } from "../Buttons";

const Overlay = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 6;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ModalWindow = styled.div `
	background-color: white;
	width: 50%;
	height: 600px;
	border-radius: 20px;
	position: relative;
`

const ModalWindowBanner = styled.div `
	background-image: ${({img}) => {
		return `url(${img})`
	}};
	width: 100%;
	height: 200px;
	background-size: cover;
	background-position: center;
	border-radius: 20px 20px 0 0;
`

const ModalWindowDescription = styled.div `
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`

const ModalWindowSpan = styled.span `
	font-family: Pacifico;
	font-size: 36px;
`

const ModalClose = styled.div `
	width: 30px;
	height: 30px;
	position: absolute;
	right: 25px;
	top: 35px;
	cursor: pointer;
`

const ModalCloseSpan = styled.span `	
	position: absolute;
 	display: block;
	height: 2px;
	width: 100%;
	background-color: orange;
	transform: rotate(${({deg}) => {
		return `${deg}deg`;
	}});
`

export const Modal = ({setOpenModal, openModal, order, setOrder}) => {

	const closeModal = (e) => {
		if (e.target.id === "overlay" || e.target.closest("#close")) {
			setOpenModal(null);
		}
	}

	const newOrder = {
		...openModal
	};

	const addToOrder = () => {
		setOrder([...order, newOrder]);	
		setOpenModal(null);	
	}

	return (
		<Overlay onClick={closeModal} id="overlay">
			<ModalWindow>
				<ModalClose id="close">
					<ModalCloseSpan deg={-135}/>
					<ModalCloseSpan deg={-45}/>
				</ModalClose>
				<ModalWindowBanner img={openModal.img}/>
				<ModalWindowDescription>
					<ModalWindowSpan>{openModal.name}</ModalWindowSpan>
					<ModalWindowSpan>{openModal.price}руб</ModalWindowSpan>
				</ModalWindowDescription>
				<ModalButton 
					text="Добавить" 
					func={addToOrder}>
				</ModalButton>
			</ModalWindow>
		</Overlay>
	)
}